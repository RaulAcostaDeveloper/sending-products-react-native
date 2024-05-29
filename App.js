import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { postData } from './API/PostData';
import { TextField } from './Components/TextField';
import { Categoria } from './Components/Categoria';

export default function App() {
  const [imageBase64, setImageBase64] = useState(null);
  const [text, setText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleOpenCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({ base64: true });
    if (!result.cancelled) {
      setImageBase64(result.assets[0].base64);
    }
  };

  const handleSelectImage = async () => {
    // Obtener una imágen de la galería
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    // Convertir a base64 para su futura reproducción
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      setImageBase64(base64);
    }
  };

  const handleSendData = () => {
    const data = {
      imageBase64,
      text,
      selectedOption,
    };
    console.log('Sending Data ', data);
    postData(data);
    // Reset status
    setImageBase64(null);
    setText('');
    setSelectedOption('');
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Instrucciones</Text>
      <Text style={styles.text}>Abrir la camara, tomar una foto y llenar los campos. Si la camara falla, tomar foto con el teléfono y seleccionar de la galería.</Text>
      <Pressable style={styles.button} onPress={handleOpenCamera}>
        <Text style={styles.buttonText}>Abrir la camara</Text>
      </Pressable >

      {/* En caso de que la aplicación de la camara falle, aún puede tomar la foto desde su celular y seleccionar una foto de la galería. */}
      {/* Además, al seleccionar una foto, permite recortarla. */}
      <Pressable style={styles.button} onPress={handleSelectImage}>
        <Text style={styles.buttonText}>Abrir la galería</Text>
      </Pressable >

      {/* Renderizado de la imagen para el preview, */}
      {imageBase64 && (
        <View>
          <Image
            source={{ uri: `data:image/jpeg;base64,${imageBase64}` }}
            style={styles.image}
            resizeMode="contain"
          />
          <TextField text={text} setText={setText} />
          <Text style={styles.charCount}>{text.length}/150</Text>
          <Categoria selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
          {/* Asegura que se ha seleccionado por lo menos la opción. */}
          {selectedOption &&
            <Pressable style={styles.button} onPress={handleSendData}>
              <Text style={styles.buttonText}>Enviar</Text>
            </Pressable >
          }
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontWeight: 'bold',
  },
  text: {
    maxWidth:300,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 20,
  },
  charCount: {
    marginTop: 10,
    color: 'gray',
  },
});

/*
 * This file is part of App para enviar fotos y descripción en react native raul acosta dev.
 *
 * App para enviar fotos y descripción en react native raul acosta dev is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * App para enviar fotos y descripción en react native raul acosta dev is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with App para enviar fotos y descripción en react native raul acosta dev. If not, see <https://www.gnu.org/licenses/>.
 *
 * Copyright (C) 2024 Angel Raúl Acosta Rojas
 */