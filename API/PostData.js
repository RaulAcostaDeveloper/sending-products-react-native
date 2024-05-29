export const postData = async (data) => {
  try {
    const response = await fetch('https://your-server-endpoint.com/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: data.imageBase64,
        text: data.text,
        selectedOption: data.selectedOption,
      }),
    });
    const responseData = await response.json();
    console.log('responseData ', responseData);
  } catch (error) {
    console.error('Upload failed', error);
  }
}

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