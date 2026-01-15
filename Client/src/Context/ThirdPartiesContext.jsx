import React, { useState } from "react";
import { createContext } from "react";
import { useHttp } from "../Hooks/useHttp";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const ThirdPartiesContext = createContext();

const ThirdPartiesProvider = ({children}) => {
    const {request} = useHttp();
    const [providers, setProviders] = useState();
    
    const createProviders = async(input) => {
            try{
                const response = await request('provider/create', 'POST', input);
                if(response.status==200){
                    loadProviders();
                    toast.success('Proveedor Creado');
                }
            }catch(error){
                toast.error('Un error ha ocurrido, intente más tarde');
                console.log("Error al cargar: ", error);
            }
    }
    const loadProviders = async() => {
        try {
            const response = await request('provider/get', 'GET');
            if(response.status==200 && response.data.provider){
                setProviders(response.data.provider);
            }
        } catch (error) {
            console.log("Error al cargar: ", error);
        }
    }
    const loadProvider = async() => {
        try {
            const response = await request('provider/get', 'GET');
            console.log(response);
            if(response.status==200 && response.data.provider){
                setProviders(response.data.provider);
            }
        } catch (error) {
            console.log("Error al cargar: ", error);
        }
    }

    const deleteProviders = async (id) => {
        try{
            const response = await request(`provider/delete/${id}`, 'DELETE');
            if(response.status==200){
                loadProviders();
                toast.success('Proveedor Eliminado');
            }

        }catch(error){
            console.log("Error al eliminar: ", error);
        }
    }
    const updateProviders = async (id, input) => {
        try{
            const response = await request(`provider/update/${id}`, 'PUT', input);
            if(response.status==200){
                loadProviders();
                toast.success('Proveedor Actualizado');
            }
        }catch(error){
            console.log("Error al actualizar: ", error);
            toast.error('Un error ha ocurrido, intente más tarde');

        }
    }
    const stateProviders = async (id) => {
        try{
            const response = await request(`provider/state/${id}`, 'PUT');
            if(response.status==200){
                loadProviders();
                toast.success('Estado de el Proveedor Cambiado');
            }
        }catch(error){
            console.log("Error al cambiar estado: ", error);
        }
    }
    const showAlert = async () => {
        const result = await Swal.fire({
        title: "Estás seguro?",
        text: "No serás capaz de recuperarlo!",
        icon: "warning",
        theme: 'dark',
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#19191a",
        canceluttonText: "Cancelar",
        confirmButtonText: "Si, Eliminar"
        });
        if (result.isConfirmed) {
            Swal.fire({
            title: "Eliminando Registro!",
            theme: 'dark',
            text: "Tu registro está siendo eliminado.",
            icon: "success",
            confirmButtonColor: "#19191a",
            });
            return true;
        }
    return false;
    }
            
    const data = {createProviders, deleteProviders, updateProviders, stateProviders, loadProviders, loadProvider, providers, showAlert};
    return <ThirdPartiesContext.Provider value={data}>{children}</ThirdPartiesContext.Provider>
}
export { ThirdPartiesProvider };
export default ThirdPartiesContext;