import React from 'react'
import axios from 'axios';
const BASE_URL = 'http://localhost:1234/';

export const useProduct = () => {
    const post = async(endpoint, body) => {
        return await request(endpoint, "POST", body);
    }
    const request = async(endpoint, method, body = null) => {
        try {
            const url = `${BASE_URL}${endpoint}`;
            const fetch = {
                method,
                url,
                data:body,
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const response = await axios(fetch);
            return response;
        } catch (error) {
            return(error);
        }
    }
    return {post};
}