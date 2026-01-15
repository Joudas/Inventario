import React from 'react'
import { CloseIcon1, PlusIcon } from '../../Components/SVG/Icons';
import DataTable from 'react-data-table-component'

const LoadInventaryModal = (props) => {
  const isUpdate = props.isUpdate || false;
  
  const columns = [
    {
      name: 'Nombre',
      selector: "No disponible",
      sortable: false,
      wrap: true,
      width: '18%',

      grow: 2
    },
    {
      name: 'Referencia',
      selector:"No disponible",
      sortable: false,
      wrap: true,
      width: '10%',

      grow: 2
    },
    {
      name: 'Precio Unitario',
      selector:"No disponible",
      sortable: false,
      wrap: true,
      width: '12%',
      grow: 2
    },
    {
      name: 'Cantidad Comprada',
      selector: "No disponible",
      sortable: false,
      width: '12%',
      wrap: true,
      grow: 2
    },
    {
      name: 'Total',
      selector: "No disponible",
      sortable: false,
      width: '12%',
      wrap: true,
      grow: 2
    },
    {
      name: 'Acciones',
      cell: <input value="1"/>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: '20%'
    }
    ];
  return (
    <>
    <div className='modal w-[100%] h-[100%] absolute bg-black opacity-60 left-0 top-0' onClick={props.handleCloseSecond}>
      
    </div>
    <div className="w-[80%] mt-10 opacity-100 h-min-[60%] py-8 bg-white rounded-lg shadow-xl z-20 absolute top-1 left-1/2 
    transform -translate-x-1/2 -translate-y-1 flex items-center justify-center ">
      <div className="w-full h-full relative flex items-center justify-center ">
        <div className="absolute top-[-20px] left-[50%] cursor-pointer border-0 bg-blue-500 rounded-full hover:bg-blue-700">
          <PlusIcon size="28px" color="white"/>
        </div>
        <div className="absolute top-[-20px] right-[10px] cursor-pointer" onClick={props.handleCloseSecond}>
          <CloseIcon1 size="24px"/>
        </div>
        <div className="main w-full h-full flex flex-col items-center justify-start gap-4 mt-4">
          {/* <div className="row w-[90%] flex justify-center">
            <input className="w-[50%] border-1 padding-1 rounded-sm" value="" placeholder="Articulo"/>
          </div> */}
          <div className="row w-[90%] justify-center">
            <DataTable
              title="Inventario"
              columns={columns}
              // data={Array.isArray(purchases) ? purchases : []}
              pagination
              highlightOnHover
              responsive
              dense
              defaultSortFieldId={2}
              persistTableHead
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LoadInventaryModal
