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
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as FileSystem from 'expo-file-system';
import { RootStackParamList } from '../App';
import { processImage } from '../services/imageService';
import { processVideo } from '../services/videoService';

type Props = NativeStackScreenProps<RootStackParamList, 'Format'>;

type AspectRatio = '9:16' | '1:1' | '16:9';

const RATIOS: { ratio: AspectRatio; label: string; description: string }[] = [
  { ratio: '9:16', label: 'Reels / TikTok', description: '9:16' },
  { ratio: '1:1', label: 'Instagram', description: '1:1' },
  { ratio: '16:9', label: 'YouTube', description: '16:9' },
];

export default function FormatScreen({ route, navigation }: Props) {
  const { uri, mediaType } = route.params;
  const [selectedRatio, setSelectedRatio] = useState<AspectRatio>('9:16');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConvert = async () => {
    try {
      setError(null);
      setIsProcessing(true);

      console.log('[FormatScreen] Starting conversion:', { uri, mediaType, selectedRatio });

      let outputPath: string;

      if (mediaType === 'image') {
        outputPath = await processImage(uri, selectedRatio);
      } else {
        outputPath = await processVideo(uri, selectedRatio);
      }

      console.log('[FormatScreen] Conversion completed:', { outputPath });

      // Verify output file exists
      try {
        const fileInfo = await FileSystem.getInfoAsync(outputPath);
        if (!fileInfo.exists) {
          throw new Error('Output file was not created');
        }
        console.log('[FormatScreen] Output file verified:', fileInfo);

        const fileSize = fileInfo.size || 0;

        navigation.navigate('Export', {
          outputPath,
          fileSize,
          mediaType,
        });
      } catch (verifyError) {
        console.error('[FormatScreen] Error verifying output file:', verifyError);
        throw new Error('Failed to verify processed file. Please try again.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('[FormatScreen] Conversion error:', errorMessage);
      setError(errorMessage);
      Alert.alert(
        'Conversion Error',
        `Failed to process ${mediaType}:\n\n${errorMessage}`
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Preview */}
        <View style={styles.previewContainer}>
          {mediaType === 'image' ? (
            <Image
              source={{ uri }}
              style={styles.preview}
              resizeMode="contain"
              onError={(e) => {
                console.error('[FormatScreen] Image preview error:', e);
                setError('Failed to load image preview');
              }}
            />
          ) : (
            <View style={styles.videoPreview}>
              <Text style={styles.videoText}>📹 Video Selected</Text>
              <Text style={styles.videoSubtext}>Ready for formatting</Text>
            </View>
          )}
        </View>

        {/* Title */}
        <Text style={styles.title}>Select Format</Text>

        {/* Error message */}
        {error && (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>⚠️ {error}</Text>
          </View>
        )}

        {/* Ratio Buttons */}
        <View style={styles.ratiosContainer}>
          {RATIOS.map((item) => (
            <TouchableOpacity
              key={item.ratio}
              style={[
                styles.ratioButton,
                selectedRatio === item.ratio && styles.ratioButtonActive,
              ]}
              onPress={() => setSelectedRatio(item.ratio)}
              disabled={isProcessing}
            >
              <Text style={styles.ratioLabel}>{item.label}</Text>
              <Text style={styles.ratioDescription}>{item.description}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Convert Button */}
        <TouchableOpacity
          style={[styles.convertButton, isProcessing && styles.buttonDisabled]}
          onPress={handleConvert}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>
              <ActivityIndicator color="#ffffff" size="small" />
              <Text style={styles.convertButtonText}>Processing...</Text>
            </>
          ) : (
            <Text style={styles.convertButtonText}>Convert</Text>
          )}
        </TouchableOpacity>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          disabled={isProcessing}
        >
          <Text style={styles.backButtonText}>Back</Text>
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
    fontSize: 24,
    fontWeight: '600',
  },
  videoSubtext: {
    color: '#999',
    fontSize: 14,
    marginTop: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  errorBox: {
    width: '100%',
    backgroundColor: '#FFE5E5',
    borderLeftColor: '#D32F2F',
    borderLeftWidth: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
    marginBottom: 16,
  },
  errorText: {
    color: '#B71C1C',
    fontSize: 13,
  },
  ratiosContainer: {
    width: '100%',
    marginBottom: 30,
  },
  ratioButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  ratioButtonActive: {
    backgroundColor: '#E8F4FF',
    borderColor: '#007AFF',
  },
  ratioLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  ratioDescription: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
  convertButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    minWidth: 250,
    alignItems: 'center',
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  convertButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
    minWidth: 250,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  backButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

