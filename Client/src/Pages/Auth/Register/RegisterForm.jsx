import React from 'react'
import { UserIcon, EmailIcon, PasswordIcon } from "../../../Components/SVG/Icons";
const RegisterForm = ({handleSubmit,handleChange, form}) => {
  return (
        // Contenedor principal para ocupar toda la pantalla
        <div className="flex justify-center items-center w-screen h-screen bg-white overflow-hidden">
            {/* El círculo decorativo se mantiene */}
            <div className="circle w-[800px] h-[800px] flex-shrink-0 rounded-[50%] flex justify-center items-center">
                {/* Contenedor del formulario, ahora con ancho y padding responsivos */}
                <div className="container bg-white w-[50%] max-w-lg rounded-lg grid place-content-center p-6 sm:p-8">
                    <form onSubmit={(e) => handleSubmit(e, 'register')} method='POST' className="text-gray-400 w-full">
                        <div className="flex flex-col">
                            <span className="title italic text-center font-bold text-2xl sm:text-2xl">Register</span>
                            
                            {/* Primer parte del formulario name-lastname */}
                            {/* Cambia a flex-col en móviles y flex-row en pantallas sm: */}
                            <div className="w-full flex flex-col sm:flex-row gap-2 mt-4">
                                {/* Campo de Nombre */}
                                <div className="input-container flex justify-center w-full sm:w-1/2">
                                    <div className="w-full flex flex-col gap-2">
                                        <label htmlFor="name" className="w-full">Nombre</label>
                                        <div className="w-full flex justify-center">
                                            <div className="flex w-full h-10">
                                            {/* Contenedor del ícono */}
                                                <div className="flex justify-center items-center w-12 rounded-l-sm bg-gray-200 border border-gray-400 border-r-0">
                                                    <div className="flex items-center justify-center rounded-[50px] size-[1.4rem] bg-gray-500 p-1">
                                                        <UserIcon size={"16px"} color={"#ffffff"}/>
                                                    </div>
                                                </div>
                                                {/* Input de texto */}
                                                <input 
                                                    onChange={handleChange}
                                                    type="text" 
                                                    id="name" 
                                                    name="name" 
                                                    placeholder="Name"
                                                    value={form.name}
                                                    className="w-full h-full rounded-r-sm border border-gray-400 font-semibold text-sm outline-none pl-2
                                                               text-gray-500 placeholder:text-sm placeholder:font-medium"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Campo de Apellido */}
                                <div className="input-container flex justify-center w-full sm:w-1/2">
                                    <div className="w-full flex flex-col gap-2">
                                        <label htmlFor="lastname" className="w-full">Apellido</label>
                                        <div className="w-full flex justify-center">
                                            <div className="flex w-full h-10">
                                            {/* Contenedor del ícono */}
                                                <div className="flex justify-center items-center w-12 rounded-l-sm bg-gray-200 border border-gray-400 border-r-0">
                                                    <div className="flex items-center justify-center rounded-[50px] size-[1.4rem] bg-gray-500 p-1">
                                                        <UserIcon size={"16px"} color={"#ffffff"}/>
                                                    </div>
                                                </div>
                                                {/* Input de texto */}
                                                <input 
                                                    value={form.lastname}
                                                    onChange={handleChange}
                                                    type="text" 
                                                    id="lastname" 
                                                    name="lastname" 
                                                    placeholder="LastName"
                                                    className="w-full h-full rounded-r-sm border border-gray-400 font-semibold text-sm outline-none pl-2
                                                               text-gray-500 placeholder:text-sm placeholder:font-medium"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Campo de Email */}
                            <div className="flex justify-center w-full mt-4">
                                <div className="w-full flex flex-col gap-2">
                                    <label htmlFor="email" className="w-full">Email</label>
                                    <div className="w-full flex justify-center">
                                        <div className="flex w-full h-10">
                                        {/* Contenedor del ícono */}
                                            <div className="flex justify-center items-center w-12 rounded-l-sm bg-gray-200 border border-gray-400 border-r-0">
                                                <div className="flex items-center justify-center rounded-[50px] size-[1.4rem] bg-gray-500 p-1">
                                                    <EmailIcon size={"16px"} color={"#ffffff"}/>
                                                </div>
                                            </div>
                                            {/* Input de texto */}
                                            <input 
                                                value={form.email}
                                                onChange={handleChange}
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                placeholder="Email"
                                                autoComplete="email"
                                                className="w-full h-full rounded-r-sm border border-gray-400 font-semibold text-sm outline-none pl-2
                                                           text-gray-500 placeholder:text-sm placeholder:font-medium"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Campo de Contraseña */}
                            <div className="flex justify-center w-full mt-4">
                                <div className="w-full flex flex-col gap-2">
                                    <label htmlFor="password" className="w-full">Contraseña</label>
                                    <div className="w-full flex justify-center">
                                        <div className="flex w-full h-10">
                                        {/* Contenedor del ícono */}
                                            <div className="flex justify-center items-center w-12 rounded-l-sm bg-gray-200 border border-gray-400 border-r-0">
                                                <div className="flex items-center justify-center rounded-[50px] size-[1.4rem] bg-gray-500 p-1">
                                                    <PasswordIcon size={"16px"} color={"#ffffff"}/>
                                                </div>
                                            </div>
                                            {/* Input de texto */}
                                            <input 
                                                value={form.password}
                                                onChange={handleChange}
                                                type="password" 
                                                id="password" 
                                                name="password" 
                                                placeholder="*****"
                                                autoComplete="current-password"
                                                className="w-full h-full rounded-r-sm border border-gray-400 font-semibold text-sm outline-none pl-2
                                                           text-gray-500 placeholder:text-sm placeholder:font-medium"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Botón de envío */}
                            <div className="flex justify-center w-full mt-6">
                                <button
                                  type="submit"
                                  className="w-full bg-[#3d3696] cursor-pointer text-white py-3 rounded-lg font-bold hover:bg-[#8857f3] transition-colors transition-transform-"
                                >
                                  Registrarse
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm
