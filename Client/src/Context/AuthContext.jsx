import React, { createContext, useEffect, useState } from "react";
import { useHttp } from "../Hooks/useHttp";
import { toast } from 'react-toastify';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const {request} = useHttp();
    const [loggout, setLoggout] = useState(false);
    const [checked, setChecked] = useState(false);
    
    useEffect(() => {
      handleVerify();
    }, [])
    
    const handleVerify = async () => {
        try {
            const response = await request('auth/verify', 'GET');
            
            if (response.status === 200) {
                setLoggout(true);
            }
            
        } catch (error) {
            // Si hay un error (ej. token no válido), el usuario no está logueado
            if (error.status === 401) {
                // El error 401 significa que la sesión no es válida
                setLoggout(false);
                return
            }
            setLoggout(false);
            console.log('Algun error en la peticion: ',error);
        }finally{
            setTimeout(() => {
                setChecked(true);
            }, 1000);
        }
    }

    const handleLoggout = async() => {
        try {
            const response = await request('user/logout', 'GET');
            if(response.status == 200){
                setLoggout(false);
            }
            toast.success(response.data.message);
        } catch (error) {
            // Si hay un error (ej. token no válido), el usuario no está logueado
            setLoggout(false);
            console.log('Algun error en la peticion: ',error);
        }finally{
            setChecked(true);
        }
    }

    const data = {
        handleVerify,
        handleLoggout,
        checked,
        toast,
        loggout,
    }
    return <AuthContext value={data}>{children}</AuthContext>
} 

export {AuthProvider};
export default AuthContext;