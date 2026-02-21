import * as FileSystem from 'expo-file-system';

export type AspectRatio = '9:16' | '1:1' | '16:9';

interface AspectRatioDimensions {
  width: number;
  height: number;
}

const getAspectRatioDimensions = (ratio: AspectRatio): AspectRatioDimensions => {
  const baseWidth = 1080;
  switch (ratio) {
    case '9:16':
      return { width: baseWidth, height: Math.round((baseWidth * 16) / 9) };
    case '1:1':
      return { width: baseWidth, height: baseWidth };
    case '16:9':
      return { width: baseWidth, height: Math.round((baseWidth * 9) / 16) };
  }
};

/**
 * Validate and process video from gallery/file system.
 * Creates a metadata file with the desired aspect ratio for the frontend to use.
 * Note: Full video transcoding is not supported in Expo managed workflow.
 * For production with video processing, consider using a backend service.
 */
export const processVideo = async (
  videoUri: string,
  aspectRatio: AspectRatio
): Promise<string> => {
  try {
    console.log('[VideoService] Processing video:', { videoUri, aspectRatio });

    // Validate URI
    if (!videoUri) {
      throw new Error('Invalid video URI provided');
    }

    const targetDimensions = getAspectRatioDimensions(aspectRatio);
    const timestamp = Date.now();
    const outputPath = `${FileSystem.cacheDirectory}video_${timestamp}.mp4`;
    const metadataPath = `${FileSystem.cacheDirectory}video_${timestamp}_metadata.json`;

    // Check if source file exists and is accessible
    try {
      const sourceInfo = await FileSystem.getInfoAsync(videoUri);
      if (!sourceInfo.exists) {
        throw new Error(`Source video file not found: ${videoUri}`);
      }
      console.log('[VideoService] Source file found:', sourceInfo);
    } catch (err) {
      console.error('[VideoService] Error accessing source file:', err);
      throw new Error(`Cannot access video file: ${String(err)}`);
    }

    // Copy video to app cache directory
    try {
      await FileSystem.copyAsync({
        from: videoUri,
        to: outputPath,
      });
      console.log('[VideoService] Video copied to cache:', outputPath);
    } catch (err) {
      console.error('[VideoService] Error copying video:', err);
      throw new Error(`Failed to copy video: ${String(err)}`);
    }

    // Store metadata about the aspect ratio and processing details
    const metadata = {
      originalUri: videoUri,
      aspectRatio,
      targetDimensions,
      timestamp: new Date().toISOString(),
      cacheUri: outputPath,
      instructions: `Video formatted for ${aspectRatio} aspect ratio. Target dimensions: ${targetDimensions.width}x${targetDimensions.height}px. Note: Actual video encoding should be done on a backend service for best results.`,
    };

    try {
      await FileSystem.writeAsStringAsync(
        metadataPath,
        JSON.stringify(metadata, null, 2)
      );
      console.log('[VideoService] Metadata saved:', metadataPath);
    } catch (err) {
      console.error('[VideoService] Error saving metadata:', err);
    }

    return outputPath;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('[VideoService] Processing failed:', errorMessage);
    throw new Error(`Video processing error: ${errorMessage}`);
  }
};

