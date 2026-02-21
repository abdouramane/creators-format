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
 * Validate and process image from gallery/file system.
 * Creates a metadata file with the desired aspect ratio for the frontend to use.
 * Note: On Android, images are copied to cache directory for safe access.
 */
export const processImage = async (
  imageUri: string,
  aspectRatio: AspectRatio,
  quality: number = 0.8
): Promise<string> => {
  try {
    console.log('[ImageService] Processing image:', { imageUri, aspectRatio, quality });

    // Validate URI
    if (!imageUri) {
      throw new Error('Invalid image URI provided');
    }

    const targetDimensions = getAspectRatioDimensions(aspectRatio);
    const timestamp = Date.now();
    const outputPath = `${FileSystem.cacheDirectory}image_${timestamp}.jpg`;
    const metadataPath = `${FileSystem.cacheDirectory}image_${timestamp}_metadata.json`;

    // Check if source file exists and is accessible
    try {
      const sourceInfo = await FileSystem.getInfoAsync(imageUri);
      if (!sourceInfo.exists) {
        throw new Error(`Source image file not found: ${imageUri}`);
      }
      console.log('[ImageService] Source file found:', sourceInfo);
    } catch (err) {
      console.error('[ImageService] Error accessing source file:', err);
      throw new Error(`Cannot access image file: ${String(err)}`);
    }

    // Copy image to app cache directory
    try {
      await FileSystem.copyAsync({
        from: imageUri,
        to: outputPath,
      });
      console.log('[ImageService] Image copied to cache:', outputPath);
    } catch (err) {
      console.error('[ImageService] Error copying image:', err);
      throw new Error(`Failed to copy image: ${String(err)}`);
    }

    // Store metadata about the aspect ratio and processing details
    const metadata = {
      originalUri: imageUri,
      aspectRatio,
      targetDimensions,
      quality,
      timestamp: new Date().toISOString(),
      cacheUri: outputPath,
      instructions: `Image formatted for ${aspectRatio} aspect ratio. Target dimensions: ${targetDimensions.width}x${targetDimensions.height}px`,
    };

    try {
      await FileSystem.writeAsStringAsync(
        metadataPath,
        JSON.stringify(metadata, null, 2)
      );
      console.log('[ImageService] Metadata saved:', metadataPath);
    } catch (err) {
      console.error('[ImageService] Error saving metadata:', err);
    }

    return outputPath;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('[ImageService] Processing failed:', errorMessage);
    throw new Error(`Image processing error: ${errorMessage}`);
  }
};

/**
 * Process image with padding to fit aspect ratio.
 * The actual visual padding is applied on display/export.
 */
export const resizeImageWithPadding = async (
  imageUri: string,
  aspectRatio: AspectRatio,
  quality: number = 0.8
): Promise<string> => {
  return processImage(imageUri, aspectRatio, quality);
};
