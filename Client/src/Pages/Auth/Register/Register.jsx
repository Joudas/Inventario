import React, { useContext, useState } from "react"
import RegisterForm from "./RegisterForm";
import UserContext from "../../../Context/UserContext";

// Los componentes SVG no se definen aquí, asumiendo que ya existen en el proyecto.
const formUndefined = {
    name: '',
    lastname: '',
    email: '',
    password: ''
}
const Register = () => {
    const [form, setForm] = useState(formUndefined);
    const {handlePOST} = useContext(UserContext);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e, method) => {
        e.preventDefault();
        handlePOST(form, method);
    }
    return(
        <>
            <RegisterForm handleSubmit={handleSubmit} handleChange={handleChange} form={form}/>
        </>
    )
};

export default Register;
