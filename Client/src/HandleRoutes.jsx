import React, { useContext } from 'react'
//Router
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router";
//Context
import AuthContext from './Context/AuthContext';
import Loading from './layout/Loading';
import Layout from './Layout/Layout';
//Pages
import DashBoard from './Pages/DashBoard/DashBoard';
import Inventary from './Pages/DashBoard/Inventary/Inventary';
import Register from "./Pages/Auth/Register/Register"
import Login from "./Pages/Auth/Login/Login";
import Purchases from './Pages/DashBoard/Purchases/Purchases';
import Provider from "./Pages/DashBoard/Provider/Provider";
import Category from './Pages/DashBoard/Category/Category';

const HandleRoutes = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route element={<PrivateRoutes/>}>
                <Route element={<Layout/>}>
                    <Route path='/' element={<DashBoard/>}/>
                    <Route path='/principal' element={<DashBoard/>}/>
                    <Route path='/inventario' element={<Inventary/>}/>
                    <Route path='/categoria' element={<Category/>}/>
                    <Route path='/compras' element={<Purchases/>}/>
                    <Route path='/proveedor' element={<Provider/>}/>
                    {/* <Route path='/clientes' element={<Clients/>}/> */}
                </Route>
            </Route>
            <Route element={<PublicRoutes/>}>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

const PrivateRoutes = () => {
    const { checked, loggout } = useContext(AuthContext);
    if (!checked) return <Loading/>;
    return loggout ? <Outlet/> : <Navigate to='/login' replace/>;
}
const PublicRoutes = () => {
    const { checked, loggout } = useContext(AuthContext);
    if (!checked) return <Loading/>;
    return !loggout ? <Outlet/> : <Navigate to='/' replace/>;
}

export default HandleRoutes
