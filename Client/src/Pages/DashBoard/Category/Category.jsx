import React from 'react'
import { useEffect, useState, useContext } from 'react'
import CategoryContext from '../../../Context/CategoryContext'
import InventaryContext from '../../../Context/InventaryContext'
// import ListInventary from '../Inventary/ListInventary'
import CreateCategoryModal from '../../../Modals/Category/CreateCategoryModal'
import { useModal } from '../../../Hooks/useModal'
import DataTable from 'react-data-table-component'
import { CheckIcon, AlertIcon } from '../../../Components/SVG/Icons'
import { showAlert } from "../../../Hooks/useAlert";

const Category = () => {
  const {createCategories, loadCategories, categories, deleteCategory, updateCategory, stateCategory} = useContext(CategoryContext);
  const {isOpen, handleOpen, handleClose} = useModal();
  const [form, setForm] = useState({
      name:'',
      description:'',
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if(form){
      if(createCategories(form, "createCategory")){
        handleCloseModal();
        loadCategories();
      }
    }
  }
  useEffect(() => {
    const asyncMethod = async()  => {
      await loadCategories();
    }
    asyncMethod();
  }, []);
  const handleCloseModal = () => {
    handleClose();
    setForm({
      name:'',
      description:'',
    });
  }

  const handleChange = (e) => {
    setForm(prev => ({
        ...prev, 
        [e.target.name]: e.target.value 
    }));
  }
  
  const onSubmitDelete = async (id) => {
    const confirmed = await showAlert().alertDelete();
    if(confirmed){
      deleteCategory(id);
    }
  }
  const handleUpdate = (id) => {
    //busca la funcion de el array de categories
    const categoryToUpdate = categories.find(ca => ca.id === id);
    if(categoryToUpdate){
      setForm({
        id: categoryToUpdate.id,
        name: categoryToUpdate.name,
        description: categoryToUpdate.description,
      });
      handleOpen();
    }
  }
  const handleSubmitUpdate = () => {
    updateCategory(form.id, form);
  }
  const closeModal = () => {
    handleClose();
    setForm({
      name:'',
      description:'',
    });
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
        center: true
      },
      {
        name: 'Nombre',
        selector: row => row.name,
        sortable: true,
        wrap: true
      },
      {
        name: 'Descripción',
        selector: row => row.description || "No disponible",
        sortable: false,
        wrap: true,
        grow: 2
      },
      {
        name: 'Acciones',
        cell: row => (
          <div className="flex gap-2">
            <button onClick={() => handleUpdate(row.id)} className="px-2 py-1 text-white bg-yellow-500 rounded-sm hover:bg-yellow-600 cursor-pointer">Editar</button>
            <button onClick={() => onSubmitDelete(row.id)} className="px-2 py-1 text-black border-2 
            bg-transparten border-transparent rounded-sm hover:bg-red-600 hover:border-red-600 hover:text-white cursor-pointer">Eliminar</button>
            <button onClick={() => stateCategory(row.id)} className="px-2 py-1 text-black border-2 
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
            title="Categorías"
            columns={columns}
            data={Array.isArray(categories) ? categories : []}
            pagination
            highlightOnHover
            responsive
            dense
            defaultSortFieldId={2}
            persistTableHead
          />
        </div>
      </div>

      {isOpen && <CreateCategoryModal handleSubmitUpdate={handleSubmitUpdate}
        isUpdate={!!form.id}
        form={form} handleClose={closeModal} handleSubmit={handleSubmit} 
        handleChange={handleChange}/>}
    </div>
  )
}

export default Category
