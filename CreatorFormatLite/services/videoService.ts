import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

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
 * Process video by copying it to cache with metadata about desired aspect ratio.
 * Note: Full video transcoding is not supported in Expo managed workflow.
 * For production, consider using a backend service or ejecting to bare workflow.
 */
export const processVideo = async (
  videoUri: string,
  aspectRatio: AspectRatio
): Promise<string> => {
  try {
    const targetDimensions = getAspectRatioDimensions(aspectRatio);
    const outputPath = `${FileSystem.cacheDirectory}video_${Date.now()}.mp4`;

    // Copy video to cache directory
    await FileSystem.copyAsync({
      from: videoUri,
      to: outputPath,
    });

    // Store metadata about the aspect ratio for reference
    const metadataPath = `${FileSystem.cacheDirectory}video_${Date.now()}_metadata.json`;
    await FileSystem.writeAsStringAsync(
      metadataPath,
      JSON.stringify({
        originalUri: videoUri,
        aspectRatio,
        targetDimensions,
        timestamp: new Date().toISOString(),
      })
    );

    return outputPath;
  } catch (error) {
    throw new Error(`Video processing error: ${error}`);
  }
};

