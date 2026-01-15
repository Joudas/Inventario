import React, { useState } from 'react';
import {createContext} from 'react';
import { useHttp } from "../Hooks/useHttp";
import { toast } from 'react-toastify';

const PurchaseContext = createContext();
const PurchaseProvider = ({ children }) => {
    const {request} = useHttp();
    const [purchases, setPurchases] = useState();

    const getPurchase = async () => {
        const url = 'purchase/get';
        try{
            const response = await request(url, 'GET');
            if(response.status==200 && response.data.products){
                setPurchases(response.data.products);
            }
        }catch(error){
            console.log("Error al cargar las compras: ", error);
        }
    }
    const getGroupPurchases = async () => {
        const url = 'purchase/getGroup';
        try{
            const response = await request(url, 'GET');
            if(response.status==200 && response.data.products){
                setPurchases(response.data.products);
            }
        }catch(error){
            console.log("Error al cargar las compras: ", error);
        }
    }
    const deletPurchase = async(id) => {
            try{
                const response = await request(`purchase/delete/${id}`, 'DELETE');
                if(response.status==200){
                    toast.success(response.data.message);
                    return true;
                }
                return false;
            }catch(error){
                console.log("Error al eliminar: ", error);
                return false;
            }
        }
        const updatePurchase = async (id, input,) => {
            try{
                const response = await request(`purchase/update/${id}`, 'PUT', input);
                if(response.status==200){
                    toast.success(response.data.message);
                    return true;
    
                }
                return false;
            }catch(error){
                console.log("Error al actualizar: ", error);
                return false;
            }
        }
        const statePurchase = async (id) => {
            try{
                const response = await request(`purchase/state/${id}`, 'PUT');
                if(response.status==200){
                    getPurchase();
                    toast.success(response.data.message);
                }
            }catch(error){
                console.log("Error al cambiar estado: ", error);
            }
        }

    const data = {
        purchases, getPurchase, deletPurchase, updatePurchase, statePurchase, getGroupPurchases
    }
    return <PurchaseContext.Provider value={data}>{children}</PurchaseContext.Provider>
}
export {PurchaseProvider}
export default PurchaseContext;