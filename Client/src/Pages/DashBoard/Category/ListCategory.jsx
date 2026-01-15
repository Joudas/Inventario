import React from 'react'
import { CheckIcon, AlertIcon } from '../../../Components/SVG/Icons'
const ListCategory = ({ca, onSubmitDelete, handleUpdate, stateCategory}) => {
  return (
        <tr className='border-y-[1px] text-slate-600 border-slate-600'>
            <th className='py-1 flex justify-center items-center'>
              <span className='tooltip-container '>{
                ca.state == 1 ? <CheckIcon size="32px" color={"#34db49"}/> : 
                <AlertIcon size="40px" color={"#ff0000"}/>
              }
                <span className={ca.state==1?"tooltip-text":"tooltip-alert tooltip-text"}>
                  {ca.state == 1 ? "Activo" : "Inactivo"}
                </span>
              </span>
            </th>
            <th className='py-1'>{ca.name}</th>
            <th className='py-1'>{ca.description || "No disponible"}</th>
            <th className='py-1'>
                <button onClick={() => handleUpdate(ca.id)}
                className='cursor-pointer mx-1 bg-blue-500 text-white p-1 rounded-sm hover:bg-blue-700'>Editar</button>
                <button onClick={() => onSubmitDelete(ca.id)}
                className='cursor-pointer mx-1 border-2 border-transparent text-grey-700 p-1 rounded-sm hover:border-red-700 hover:text-red-700'>Eliminar</button>
                <button onClick={() => stateCategory(ca.id)}
                className='cursor-pointer mx-1 border-2 border-transparent text-grey-700 p-1 rounded-sm hover:border-green-600 hover:text-green-600'>Cambiar</button>

            </th>
        </tr>
  )
}

export default ListCategory
