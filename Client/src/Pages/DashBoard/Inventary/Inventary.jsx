import React from 'react'
import { useEffect, useState, useContext } from 'react'
import InventaryContext from '../../../Context/InventaryContext'
// import ListInventary from './ListInventary'
import CreateProductModal from '../../../Modals/Inventary/CreateProductModal'
import { useModal } from '../../../Hooks/useModal'
import DataTable from 'react-data-table-component'
import {AlertIcon, CheckIcon} from '../../../Components/SVG/Icons';
import CategoryContext from '../../../Context/CategoryContext'
import { showAlert } from "../../../Hooks/useAlert";

const Inventary = () => {
  const {loadProducts, createInventary, deleteInvetary, products,
    updateInventary, stateInventary} = useContext(InventaryContext);
  const {loadCategories, categories} = useContext(CategoryContext);
  const {isOpen, handleOpen, handleClose} = useModal();
  const [form, setForm] = useState({
    id_category:'1',
    name:'',
    description:'',
    price:0,
  })
  useEffect(() => {
    const asyncMethod = async()  => {
      await loadProducts();
      await loadCategories();
    }
    asyncMethod();
  }, []);
  
  const handleChange = (e) => {
    setForm(prev => ({
        // 1. Copia todas las propiedades del estado anterior (prev)
        ...prev, 
        // 2. Sobrescribe SÓLO la propiedad cuyo nombre coincide con el 'name' del input
        [e.target.name]: e.target.value 
    }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(form){
      if(await createInventary(form, "createProduct")){
        handleCloseModal();
        loadProducts();
      }
    }
  }
  const onSubmitDelete = async (id) => {
    const confirmed = await showAlert().alertDelete();
    if(confirmed){
      await deleteInvetary(id, "deleteProduct");
      loadProducts();
    }
  }
  const handleUpdate = (id) => {
    //busca la funcion de el array de categories
    const productToUpdate = products.find(ca => ca.id === id);
    if(productToUpdate){
      setForm({
        id: productToUpdate.id,
        name: productToUpdate.name,
        description: productToUpdate.description,
        id_category: String(productToUpdate.id_category),
        id_provider: String(productToUpdate.id_provider),
        reference: productToUpdate.reference,
        price: String(productToUpdate.price),
        acount: String(productToUpdate.acount),
      });
      handleOpen();
    }
  }
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    if(await updateInventary(form.id, form, "updateProduct")){
      handleCloseModal();
      loadProducts();
    }
  }
  const handleCloseModal = () => {
    handleClose();
    setForm({
      id:0,
      id_category:'1',
      id_provider:'1',
      reference:'',
      name:'',
      description:'',
      price:0,
      acount:0
    });
  }

  const stateProduct = async (id) => {
    await stateInventary(id, "stateProduct");
    loadProducts();
  }
  
  const columns = [
      {
        name: 'Estado',
        
        cell: row => {
          const isActive = row.state ?? row.active ?? row.isActive ?? false;
          const label = isActive ? <CheckIcon size="32px" color={"#34db49"}/> : <AlertIcon size="40px" color={"#ff0000"}/>;
          const classAlert = isActive ? 'tooltip-alert' : '';
          return (
            <div className="w-full flex justify-center ">
              <span className={`tooltip-container`}>{label}</span>
                <span className={`tooltip-text ${classAlert}`}>
                  {isActive ? "Activo" : "Inactivo"}
                </span>
            </div>
          );
        },
        sortable: true,
        width: '120px',
        center: true,
        cellExport: false
      },
      {
        name: 'Referencia',
        selector: row => row.reference,
        sortable: true,
        width: '120px',
        wrap: true
      },
      {
        name: 'Nombre',
        selector: row => row.name || "No disponible",
        sortable: false,
        wrap: true,
        width: '280px',

        grow: 2
      },
      {
        name: 'Categoria',
        selector: row => row.category_name,
        width: '180px',
        sortable: true,
        wrap: true
      },
      {
        name: 'Precio',
        selector: row => row.price || "No disponible",
        sortable: false,
        wrap: true,
        width: '180px',
        grow: 2
      },
      {
        name: 'Iva',
        selector: row => (row.is_tax_exempt ? "Exento" : row.tax_rate) || "No disponible",
        sortable: false,
        wrap: true,
        width: '180px',
        grow: 2
      },
      {
        name: 'Cantidad',
        selector: row => row.acount || "No disponible",
        sortable: false,
        width: '180px',
        wrap: true,
        grow: 2
      },
      {
        name: 'Acciones',
        cell: row => (
          <div className="flex gap-2 justify-center">
            <button onClick={() => handleUpdate(row.id)} className="px-2 py-1 text-white bg-yellow-500 rounded-sm hover:bg-yellow-600 cursor-pointer">Editar</button>
            <button onClick={() => onSubmitDelete(row.id)} className="px-2 py-1 text-black border-2 
            bg-transparten border-transparent rounded-sm hover:bg-red-600 hover:border-red-600 hover:text-white cursor-pointer">Eliminar</button>
            <button onClick={() => stateProduct(row.id)} className="px-2 py-1 text-black border-2 
            bg-transparent border-transparent rounded-sm hover:bg-blue-600 hover:border-blue-600 hover:text-white cursor-pointer">Toggle</button>
          </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        width: '300px'
      }
  ];

  
  return (
    <div>
      <div className="pt-20 header w-[100%] h-[120px] flex flex-row gap-3 justify-center">
        <div onClick={handleOpen} className="p-1 w-26 h-8 text-white bg-blue-500 cursor-pointer rounded-sm  grid place-content-center hover:bg-blue-700 hover:text-white"><button className="cursor-pointer">Crear nuevo</button></div>
      </div>

      <div className="main size-full justify-center flex">
        <div className="w-[90%]">
          <DataTable
            title="Productos"
            columns={columns}
            data={Array.isArray(products) ? products : []}
            pagination
            highlightOnHover
            responsive
            dense
            defaultSortFieldId={2}
            persistTableHead
          />
        </div>
      </div>
      {isOpen && <CreateProductModal categories={categories} form={form} handleSubmit={handleSubmit} 
      handleClose={handleCloseModal} handleChange={handleChange} isUpdate={!!form.id} handleSubmitUpdate={handleSubmitUpdate}/>}
    </div>
  )
}

export default Inventary
