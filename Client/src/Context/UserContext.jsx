import React, { createContext, useContext } from "react";
import { useHttp } from "../Hooks/useHttp";
import AuthContext from "./AuthContext";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const { request } = useHttp();
    const {handleVerify, toast} = useContext(AuthContext);

    const handlePOST = async (form, method) => {
        try {
            const response = await request(`user/${method}`, 'POST', form);
            if(response && response.data){
                handleVerify();
            }
            // console.log('Éxito:', response.data.message);
        } catch(error) {
        // Accede al mensaje de error del servidor
            if (error.response.data.message && error.response.data.message !== 'Falta Iniciar Sección') {
                toast.error(error.response.data.message);
            }
            console.log(error);
        }
    }
    
    
    // const handleGET = () => {
    //     try {
    //         request('user/all','GET');
    //     } catch (error) {
    //         console.log('Ocurrio un error en el get: ',error);
            
    //     }
    // }
    // useEffect(() => {
    //   handleGET();
    // }, []);
    
    const dataContext = {
        handlePOST,
        request
    }

    return <UserContext value={dataContext}>{children}</UserContext>
}

export {UserProvider};
export default UserContext;