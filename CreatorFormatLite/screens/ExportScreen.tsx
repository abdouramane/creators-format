import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Export'>;

export default function ExportScreen({ route, navigation }: Props) {
  const { outputPath, fileSize, mediaType } = route.params;
  const [isSaving, setIsSaving] = useState(false);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const saveToGallery = async () => {
    try {
      setIsSaving(true);
      console.log('[ExportScreen] Requesting media library permissions...');

      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        console.warn('[ExportScreen] Permission denied:', status);
        Alert.alert('Permission Denied', 'Unable to save media to gallery. Please enable permissions in settings.');
        return;
      }

      console.log('[ExportScreen] Permission granted, saving file...');

      // Verify source file exists
      try {
        const sourceInfo = await FileSystem.getInfoAsync(outputPath);
        if (!sourceInfo.exists) {
          throw new Error('Processed file not found');
        }
        console.log('[ExportScreen] Source file verified:', sourceInfo);
      } catch (err) {
        console.error('[ExportScreen] Source file error:', err);
        throw new Error('Cannot access processed file');
      }

      // Copy file to a permanent location
      const filename = `CreatorFormat_${Date.now()}.${mediaType === 'video' ? 'mp4' : 'jpg'}`;
      const permanentPath = `${FileSystem.documentDirectory}${filename}`;

      console.log('[ExportScreen] Copying to:', permanentPath);

      await FileSystem.copyAsync({
        from: outputPath,
        to: permanentPath,
      });

      console.log('[ExportScreen] File copied, adding to media library...');

      // Add to media library
      try {
        await MediaLibrary.createAssetAsync(permanentPath);
        console.log('[ExportScreen] File saved to gallery successfully');

        Alert.alert(
          'Success!',
          `${mediaType === 'video' ? 'Video' : 'Image'} saved to gallery successfully!`,
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Home'),
            },
          ]
        );
      } catch (libraryError) {
        console.error('[ExportScreen] Media library error:', libraryError);
        // Still consider it a success if file was copied even if library add failed
        Alert.alert(
          'Saved Partially',
          `File saved to device storage at: ${permanentPath}`,
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Home'),
            },
          ]
        );
      }

      // Clean up cache
      try {
        await FileSystem.deleteAsync(outputPath);
        console.log('[ExportScreen] Cache cleaned');
      } catch (e) {
        console.warn('[ExportScreen] Cleanup error (non-critical):', e);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('[ExportScreen] Save error:', errorMessage);
      Alert.alert(
        'Save Failed',
        `Failed to save ${mediaType}: ${errorMessage}\n\nPlease check your storage permissions and try again.`
      );
    } finally {
      setIsSaving(false);
    }
  };

  const startOver = () => {
    try {
      FileSystem.deleteAsync(outputPath).catch(() => {});
    } catch (e) {
      // Ignore cleanup errors
    }
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Preview */}
        <View style={styles.previewContainer}>
          {mediaType === 'image' ? (
            <Image
              source={{ uri: outputPath }}
              style={styles.preview}
              resizeMode="contain"
              onError={(e) => {
                console.error('[ExportScreen] Preview error:', e);
              }}
            />
          ) : (
            <View style={styles.videoPreview}>
              <Text style={styles.videoText}>✅ Video Processed</Text>
              <Text style={styles.videoSubtext}>Ready to save</Text>
            </View>
          )}
        </View>

        {/* Title */}
        <Text style={styles.title}>Ready to Export</Text>

        {/* File Info */}
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Type:</Text>
            <Text style={styles.infoValue}>
              {mediaType === 'video' ? 'MP4 Video' : 'JPEG Image'}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Size:</Text>
            <Text style={styles.infoValue}>{formatFileSize(fileSize)}</Text>
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={[styles.saveButton, isSaving && styles.buttonDisabled]}
          onPress={saveToGallery}
          disabled={isSaving}
        >
          {isSaving ? (
            <>
              <ActivityIndicator color="#ffffff" size="small" />
              <Text style={styles.saveButtonText}>Saving...</Text>
            </>
          ) : (
            <Text style={styles.saveButtonText}>💾 Save to Gallery</Text>
          )}
        </TouchableOpacity>

        {/* Start Over Button */}
        <TouchableOpacity
          style={[styles.startOverButton, isSaving && styles.buttonDisabled]}
          onPress={startOver}
          disabled={isSaving}
        >
          <Text style={styles.startOverButtonText}>Start Over</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  previewContainer: {
    width: '100%',
    height: 300,
    marginBottom: 30,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  preview: {
    width: '100%',
    height: '100%',
  },
  videoPreview: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
  },
  videoSubtext: {
    color: '#999',
    fontSize: 13,
    marginTop: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#34C759',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    minWidth: 250,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  startOverButton: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
    minWidth: 250,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  startOverButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

