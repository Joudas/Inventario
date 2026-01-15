import React from 'react'
import { FacebookIcon, InstagramIcon, WhatsappIcon } from '../Components/SVG/Icons'

const Footer = () => {
  return (
    <div className='w-full grid sm:grid-cols-2 lg:grid-cols-4 justify-center items-center px-8 gap-y-2'>
      <div className="text-3xl text-center font-extrabold">
        <p className='w-[80%]'>ORDENA TU NEGOCIO CON NOSOTROS</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className='font-semibold italic w-[80%]'>Quienes Somos?</p>
        <p className=' w-[80%]'>Somos Un Grupo De Trabajadores Independientes Que Busca Que Los Negocios De Colombia Crescan</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>Colombia</p>
        <p>inventary@gmail.com</p>
        <p>Whatsap</p>
        <p>Tel: +57 127-123-2234</p>
        <p>Sin Negocio Fisico</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className='font-bold'>Quieres Un Negocio Inteligente?</p>
        <p className='font-semibold italic'>Registrarse</p>
        <p className='italic'>Siguenos</p>
        <div className="flex gap-1">
            <p><InstagramIcon size={"18px"} color={"#ffffff"}/></p>
            <p><FacebookIcon size={"18px"} color={"#ffffff"}/></p>
            <p><WhatsappIcon size={"18px"} color={"#ffffff"}/></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
