import React, { useState } from 'react';

import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View } from "react-native";

export const Categoria = ({ selectedOption, setSelectedOption }) => {
  return (
    <View>
      <Text style={styles.label}>Categoría del producto:</Text>
      <Picker
        selectedValue={selectedOption}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
      >
        <Picker.Item label="Cocina" value="Cocina" />
        <Picker.Item label="Hogar" value="Hogar" />
        <Picker.Item label="Recámara" value="Recámara" />
        <Picker.Item label="Limpieza" value="Limpieza" />
        <Picker.Item label="Baño" value="Baño" />
        <Picker.Item label="Contigo" value="Contigo" />
        <Picker.Item label="Bienestar" value="Bienestar" />
      </Picker>
      <Text style={styles.selectedText}>Seleccionado: <Text style={styles.titulo}>{selectedOption}</Text></Text>
    </View>
  )
}
const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    width: 200,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
  titulo: {
    fontWeight: 'bold',
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