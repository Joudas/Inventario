import React from 'react'
import { CloseIcon1 } from '../../Components/SVG/Icons';

const CreateProductModal = (props) => {
  const isUpdate = props.isUpdate || false;
  return (
    <>
    <div className='modal w-[100%] h-[100%] absolute bg-black opacity-60 left-0 top-0' onClick={props.handleClose}>
      
    </div>
    <div className="w-[40%] mt-10 opacity-100 h-min-[60%] py-8 bg-white rounded-lg shadow-xl z-20 absolute top-1 left-1/2 
    transform -translate-x-1/2 -translate-y-1 flex items-center justify-center ">
      <div className="w-full h-full relative flex items-center justify-center ">
        <div className="absolute top-[-20px] right-[10px] cursor-pointer" onClick={props.handleClose}>
          <CloseIcon1 size="24px"/>
        </div>
        <form action="" onSubmit={isUpdate ? props.handleSubmitUpdate : props.handleSubmit} className="flex flex-col create-product w-[80%] justify-normal">
          <input value={props.form.id} type="hidden" id="id" />
          <input  value={props.form.reference} type="hidden"/>

          <div className="">
            <label className="block text-sm font-medium text-gray-700 mt-2" htmlFor="name">Nombre</label>
            <input value={props.form.name} className="mt-1 block px-4 py-2 w-full
            bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm" required type="text" id="name" name="name" onChange={props.handleChange}/>
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mt-2" htmlFor="description">Descripcion</label>
          <input value={props.form.description} className="mt-1 block px-4 py-2 w-full
            bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm" type="text" id="description" name="description" onChange={props.handleChange}/>
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mt-2" htmlFor="price">Precio</label>
          <input value={props.form.price} className="mt-1 block px-4 py-2 w-full
            bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm" defaultValue="0" required type="number" id="price" name="price" onChange={props.handleChange}/>
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mt-2" htmlFor="id_category">Categoria</label>
            <select required value={props.form.id_category} class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
            id="id_category" name="id_category" onChange={props.handleChange}>
              <option value="" disabled>Selecciona una categoría</option> {/* Opción definida */}
              {props.categories && Array.isArray(props.categories) ? props.categories.map((ca) => {
                const actived = ca.state ? 1 : 0;
                return actived && <option key={ca.id} value={ca.id}>{ca.name}</option>
              }) : <option value={0}>Categorías no encontradas</option>}
            </select>
          </div>
          <div className="mt-4 w-full justify-center flex">
            <button className='size-full cursor-pointer f-bold text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>{isUpdate ? "Actualizar" : "Crear"}</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default CreateProductModal
