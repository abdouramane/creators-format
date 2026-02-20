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
 * Process image by copying it to cache with metadata about desired aspect ratio.
 * Note: For full image processing (resizing, padding), use a backend service.
 */
export const processImage = async (
  imageUri: string,
  aspectRatio: AspectRatio,
  quality: number = 0.8
): Promise<string> => {
  try {
    const targetDimensions = getAspectRatioDimensions(aspectRatio);
    const outputPath = `${FileSystem.cacheDirectory}image_${Date.now()}.jpg`;

    // Copy image to cache directory
    await FileSystem.copyAsync({
      from: imageUri,
      to: outputPath,
    });

    // Store metadata about the aspect ratio for reference
    const metadataPath = `${FileSystem.cacheDirectory}image_${Date.now()}_metadata.json`;
    await FileSystem.writeAsStringAsync(
      metadataPath,
      JSON.stringify({
        originalUri: imageUri,
        aspectRatio,
        targetDimensions,
        quality,
        timestamp: new Date().toISOString(),
      })
    );

    return outputPath;
  } catch (error) {
    throw new Error(`Image processing error: ${error}`);
  }
};

/**
 * Process image with padding to fit aspect ratio.
 * For actual resizing with padding, consider using a backend service.
 */
export const resizeImageWithPadding = async (
  imageUri: string,
  aspectRatio: AspectRatio,
  quality: number = 0.8
): Promise<string> => {
  return processImage(imageUri, aspectRatio, quality);
};

