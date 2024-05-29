import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export const TextField = ({ text, setText }) => {
  const [inputHeight, setInputHeight] = useState(0);
  return (
    <TextInput
      style={[styles.textArea, { height: Math.max(40, inputHeight) }]}
      placeholder="Escriba aquí su descripción..."
      value={text}
      onChangeText={(newText) => {
        if (newText.length <= 150) {
          setText(newText);
        }
      }}
      multiline={true}
      onContentSizeChange={(event) => {
        setInputHeight(event.nativeEvent.contentSize.height);
      }}
      maxLength={150}
    />
  )
}
const styles = StyleSheet.create({
  textArea: {
    marginTop: 20,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
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