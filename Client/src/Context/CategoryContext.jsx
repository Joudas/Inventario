import React, { useState } from "react";
import { createContext } from "react";
import { useHttp } from "../Hooks/useHttp";
import { toast } from 'react-toastify';

const CategoryContext = createContext();

const CategoryProvider = ({children}) => {
    const {request} = useHttp();
    const [categories, setCategories] = useState();

    
    //Categories
    const createCategories = async(input) => {
        try{
            const response = await request('category/create', 'POST', input);
            if(response.status==200){
                loadCategories();
                toast.success('Categoria Creada');
            }
        // eslint-disable-next-line no-unused-vars
        }catch(e){
            toast.error('Error');
        }
    }
    const loadCategories = async() => {
        try {
            const response = await request('category/get', 'GET');
            if(response.status==200 && response.data.products){
                setCategories(response.data.products);
            }
        } catch (error) {
            console.log("Error al cargar: ", error);
        }
    }
    const deleteCategory = async (id) => {
        try{
            const response = await request(`category/delete/${id}`, 'DELETE');
            if(response.status==200){
                loadCategories();
                toast.success('Categoria Eliminada');
            }
        }catch(error){
            console.log("Error al eliminar: ", error);
        }
    }
    const updateCategory = async (id, input) => {
        try{
            console.log(id);
            const response = await request(`category/update/${id}`, 'PUT', input);
            if(response.status==200){
                loadCategories();
                toast.success('Categoria Actualizada');
            }
        }catch(error){
            console.log("Error al actualizar: ", error);
        }
    }
    const stateCategory = async (id) => {
        try{
            const response = await request(`category/state/${id}`, 'PUT');
            if(response.status==200){
                loadCategories();
                toast.success('Estado de la Categoria Cambiado');
            }
        }catch(error){
            console.log("Error al cambiar estado: ", error);
        }
    }
    
    const data = {
        loadCategories, createCategories, deleteCategory, updateCategory, stateCategory, categories,
    }
    return <CategoryContext.Provider value={data}>{children}</CategoryContext.Provider>
}

export {CategoryProvider};
export default CategoryContext;