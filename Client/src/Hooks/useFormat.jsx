import React, { useState } from 'react'

export const useFormat = () => {

    const FormatReference = (value) => {
        let sanitizedValue = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

    // 2. Aplica la máscara 'XXX-123'
    
        let formattedValue = '';
        for (let i = 0; i < sanitizedValue.length; i++) {
        if (i < 3) {
            // Los primeros 3 caracteres deben ser letras
                if (sanitizedValue[i].match(/[a-zA-Z]/)) {
                formattedValue += sanitizedValue[i];
                }
            } else if (i === 3) {
                // Agrega el guión después del tercer carácter
                if (sanitizedValue[i].match(/[0-9]/)) {
                formattedValue += `-${sanitizedValue[i]}`;
                }
            } else if (i > 3 && i < 7) {
            // Los siguientes 3 caracteres deben ser números
                if (sanitizedValue[i].match(/[0-9]/)) {
                formattedValue += sanitizedValue[i];
                }
            }
        }
        if (formattedValue.length <= 7) {
            return (formattedValue);
        }else{
            throw new Error("Falta rellenar el campo");
        }
    }
    return {FormatReference};
}