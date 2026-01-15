import React, { useState, useContext, useEffect } from 'react'
import { useModal } from '../../../Hooks/useModal'
import CreatePurchaseModal from '../../../Modals/Purchase/CreatePurchaseModal';
import DataTable from 'react-data-table-component'
import {AlertIcon, CheckIcon} from '../../../Components/SVG/Icons';
import PurchaseContext from '../../../Context/PurchaseContext'
import InventaryContext from '../../../Context/InventaryContext'
import { showAlert } from "../../../Hooks/useAlert";
import LoadInventaryModal from '../../../Modals/Purchase/LoadInventaryModal';


const initialForm = {
  id_provider:'1',
  id_product:'1',
  quantity:0,
  unit_cost:0
}
const Purchases = () => {
    const {inventary, loadInventary} = useContext(InventaryContext);
    const {purchases, createPurchase, deletePurchase, getGroupPurchases, getPurchase, updatePurchase, statePurchase} = useContext(PurchaseContext);
    const {isOpen, handleOpen, handleClose} = useModal();
    const {isOpenSecond, handleOpenSecond, handleCloseSecond} = useModal();
    const [form, setForm] = useState(initialForm);
    
    useEffect(() => {
      const asyncMethod = async()  => {
        await getGroupPurchases();
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
        if(await createPurchase(form, "create")){
          handleCloseModal();
          getPurchase();
        }
      }
    }
    const onSubmitDelete = async (id) => {
      const confirmed = await showAlert().alertDelete();
      if(confirmed){
        await deletePurchase(id, "delete");
        getPurchase();
      }
    }
    const handleUpdate = (id) => {
      //busca la funcion de el array de categories
      const purchaseToUpdate = purchases.find(ca => ca.id === id);
      if(purchaseToUpdate){
        setForm({
          id_provider:String(purchaseToUpdate.id_provider),
          id_product:String(purchaseToUpdate.id_product),
          quantity:purchaseToUpdate.quantity,
          unit_cost:purchaseToUpdate.unit_cost
        });
        handleOpen();
      }
    }
    const handleSubmitUpdate = async (e) => {
      e.preventDefault();
      if(await updatePurchase(form.id, form, "update")){
        handleCloseModal();
        getPurchase();
      }
    }
    const handleCloseModal = () => {
      handleClose();
      // handleCloseInventary();
      setForm({
        id_provider:'1',
        id_product:'1',
        quantity:0,
        unit_cost:0
      });
    }
    const changeState = async (id) => {
      await statePurchase(id, "state");
      getPurchase();
    }
      
    const columns = [
    {
      name: 'Nombre',
      selector: row => row.group_name || "No disponible",
      sortable: false,
      wrap: true,
      width: '18%',

      grow: 2
    },
    {
      name: 'Descripcion',
      selector: row => row.description || "No disponible",
      sortable: false,
      wrap: true,
      width: '10%',

      grow: 2
    },
    {
      name: 'Fecha',
      selector: row => row.date_created || "No disponible",
      sortable: false,
      wrap: true,
      width: '12%',
      grow: 2
    },
    {
      name: 'Subtotal',
      selector: row => '$'+row.subtotal || "No disponible",
      sortable: false,
      width: '12%',
      wrap: true,
      grow: 2
    },
    {
      name: 'Impuesto',
      selector: row => '$'+row.total_tax_amount || "No disponible",
      sortable: false,
      width: '12%',
      wrap: true,
      grow: 2
    },
    {
      name: 'Total',
      selector: row => '$'+row.total || "No disponible",
      sortable: false,
      width: '12%',
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
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: '20%'
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
            data={Array.isArray(purchases) ? purchases : []}
            pagination
            highlightOnHover
            responsive
            dense
            defaultSortFieldId={2}
            persistTableHead
          />
        </div>
      </div>
      {isOpen && <CreatePurchaseModal form={form} handleSubmit={handleSubmit} inventary={inventary} loadInventary={loadInventary}
      handleClose={handleClose} handleChange={handleChange} isUpdate={!!form.id} handleSubmitUpdate={handleSubmitUpdate} handleOpenSecond={handleOpenSecond}/>}
      {isOpenSecond && <LoadInventaryModal form={form} handleSubmit={handleSubmit} inventary={inventary} loadInventary={loadInventary}
      handleClose={handleClose} handleChange={handleChange} isUpdate={!!form.id} handleSubmitUpdate={handleSubmitUpdate} handleCloseSecond={handleCloseSecond}/>}
    </div>
  )
}

export default Purchases
