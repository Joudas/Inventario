import React, { useState } from "react";
import { createContext } from "react";
import { useHttp } from "../Hooks/useHttp";
import { toast } from 'react-toastify';

const InventaryContext = createContext();

const InventaryProvider = ({children}) => {
    const {request} = useHttp();
    const [products, setProducts] = useState();
    const [inventary, setInventary] = useState();

    const createInventary = async(input) => {
        console.log(input);
        try {
            const response = await request(`inventary/create`, 'POST', input);
            if(response.status==200){
                toast.success(response.data.message);
                return true;
            }
            return false;
        } catch (error) {
            toast.error('Error');
            console.log(error);
            return false;
        }
    }
    const deleteInvetary = async(id) => {
        try{
            const response = await request(`inventary/delete/${id}`, 'DELETE');
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
    const updateInventary = async (id, input,) => {
        try{
            const response = await request(`inventary/update/${id}`, 'PUT', input);
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
    const stateInventary = async (id) => {
        try{
            const response = await request(`inventary/state/${id}`, 'PUT');
            if(response.status==200){
                loadProducts();
                toast.success(response.data.message);
            }
        }catch(error){
            console.log("Error al cambiar estado: ", error);
        }
    }
    const loadProducts = async() => {
        try{
            const response = await request('inventary/get', 'GET');
            // eslint-disable-next-line no-cond-assign
            if(response.status==200 && response.data.products){
                setProducts(response.data.products);
            }
        }catch(error){
            console.log("Error al cargar los productos: ", error);
        }
    }
    const loadInventary = async(input) => {
        try{
            const response = await request('inventary/getByReference', 'POST', input);
            if(response.status==200 && response.data.products){
                setInventary(response.data.products);
            }
        }catch(err){
            toast.error('Error al cargar el inventario');
            console.log(err);
        }
    }
    
    const data = {
        loadProducts, products, loadInventary, inventary,
        createInventary, deleteInvetary, updateInventary, stateInventary,
    }
    return <InventaryContext.Provider value={data}>{children}</InventaryContext.Provider>
}

export {InventaryProvider};
export default InventaryContext;