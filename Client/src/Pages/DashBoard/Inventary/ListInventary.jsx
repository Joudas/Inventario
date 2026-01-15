import React from 'react'

const ListInventary = ({product}) => {
  return (
        <tr className='border-y-[1px] text-slate-600 border-slate-600'>
            <th className='py-1'>{product.reference}</th>
            <th className='py-1'>{product.category_name}</th>
            <th className='py-1'>{product.name}</th>
            <th className='py-1 text-left'>${product.price}</th>
            <th className='py-1 text-left'>{product.acount}</th>
            <th className='py-1'>
                <button className='bg-blue-500 text-white p-1 rounded-sm hover:bg-blue-700'>Editar</button>
                <button className='bg-red-500 text-white p-1 rounded-sm hover:bg-red-700'>Eliminar</button>
            </th>
        </tr>
  )
}

export default ListInventary
