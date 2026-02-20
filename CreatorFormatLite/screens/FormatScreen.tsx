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

  const handleConvert = async () => {
    try {
      setIsProcessing(true);

      let outputPath: string;

      if (mediaType === 'image') {
        outputPath = await processImage(uri, selectedRatio);
      } else {
        outputPath = await processVideo(uri, selectedRatio);
      }

      // Get file size
      const fileInfo = await FileSystem.getInfoAsync(outputPath);
      const fileSize = (fileInfo.exists && fileInfo.size) ? fileInfo.size : 0;

      navigation.navigate('Export', {
        outputPath,
        fileSize,
        mediaType,
      });
    } catch (error) {
      Alert.alert('Error', `Failed to process ${mediaType}. Please try again.`);
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
            />
          ) : (
            <View style={styles.videoPreview}>
              <Text style={styles.videoText}>Video Preview</Text>
            </View>
          )}
        </View>

        {/* Title */}
        <Text style={styles.title}>Select Format</Text>

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
            <ActivityIndicator color="#ffffff" size="small" />
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
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
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

