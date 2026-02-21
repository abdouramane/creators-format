import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Request permissions on mount
  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    try {
      console.log('[HomeScreen] Requesting image picker permissions...');
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status === 'granted') {
        console.log('[HomeScreen] Permissions granted');
        setPermissionGranted(true);
      } else {
        console.warn('[HomeScreen] Permissions denied:', status);
        setPermissionGranted(false);
        Alert.alert(
          'Permission Required',
          'CreatorFormat Lite needs permission to access your photos and videos. Please enable it in settings.'
        );
      }
    } catch (error) {
      console.error('[HomeScreen] Error requesting permissions:', error);
      Alert.alert('Permission Error', 'Failed to request permissions.');
    }
  };

  const pickMedia = async () => {
    try {
      if (!permissionGranted) {
        Alert.alert(
          'Permission Denied',
          'Please grant permission to access your media library.'
        );
        await requestPermissions();
        return;
      }

      setIsLoading(true);
      console.log('[HomeScreen] Opening media library...');

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 1,
        allowsEditing: false,
      });

      if (!result.canceled && result.assets[0]) {
        const asset = result.assets[0];
        console.log('[HomeScreen] Media selected:', {
          uri: asset.uri,
          type: asset.type,
          fileName: asset.fileName,
        });

        const mediaType = asset.type === 'video' ? 'video' : 'image';

        navigation.navigate('Format', {
          uri: asset.uri,
          mediaType,
        });
      } else {
        console.log('[HomeScreen] Media selection cancelled');
      }
    } catch (error) {
      console.error('[HomeScreen] Error picking media:', error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      Alert.alert(
        'Error',
        `Failed to open media library: ${errorMessage}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>CreatorFormat Lite</Text>
        <Text style={styles.subtitle}>
          Convert your content to any format
        </Text>

        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={pickMedia}
          disabled={isLoading || !permissionGranted}
        >
          {isLoading ? (
            <ActivityIndicator color="#ffffff" size="small" />
          ) : (
            <Text style={styles.buttonText}>Select Media</Text>
          )}
        </TouchableOpacity>

        {!permissionGranted && (
          <View style={styles.permissionWarning}>
            <Text style={styles.warningText}>
              ⚠️ Permission required to access photos and videos
            </Text>
            <TouchableOpacity
              style={styles.permissionButton}
              onPress={requestPermissions}
            >
              <Text style={styles.permissionButtonText}>Grant Permission</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    minWidth: 250,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  permissionWarning: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFF3CD',
    borderRadius: 10,
    alignItems: 'center',
  },
  warningText: {
    color: '#856404',
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
  permissionButton: {
    backgroundColor: '#FF9800',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  permissionButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});

