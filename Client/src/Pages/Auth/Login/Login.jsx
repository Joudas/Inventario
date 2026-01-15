import React, { useContext } from 'react'
import LoginForm from './LoginForm'
import { useState } from 'react'
import UserContext from '../../../Context/UserContext';
import { ToastContainer } from 'react-toastify';


const initialForm = {
    "email":"",
    "password":""
};
const Login = () => {
    const [form, setForm] = useState(initialForm);
    const {handlePOST} = useContext(UserContext);
    const handleSubmit = (e, method) => {
      e.preventDefault();
      handlePOST(form, method);
    }
    const handleChange = (e) => {
      setForm({
          ...form,
          [e.target.name]:e.target.value
      })
    }
  return (
    <>
      <ToastContainer/>
      <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} form={form}/>
    </>
  )
}

export default Login
