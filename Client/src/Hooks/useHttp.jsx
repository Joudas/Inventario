import React, { useState } from 'react'
import axios from 'axios';

const BASE_URL = 'http://localhost:1234/';

export const useHttp = () => {
    const [loading, setLoading] = useState(false);

        //Recibe el metodo y el cuerpo si hay
    const request = async(endpoint, method, body = null) => {
        setLoading(true);
        // eslint-disable-next-line no-useless-catch
        try {

            const url = `${BASE_URL}${endpoint}`;
            //Crea la petición
            const fetch = {
                method,
                url,
                withCredentials: true //Permite pasar cookies al servidor, escencial, si esto no sirven las cookies
            }
            if(body !== null && body!== undefined){
                fetch.data = body;
                fetch.headers = {
                    'Content-Type': 'application/json'
                }
            }
            // Le da la peticion al axios y genera la respuesta
            const response = await axios(fetch);
            return response;
        // eslint-disable-next-line no-useless-catch
        } catch (error) {
            throw error;
        }
    }
    return {loading, request}

}
