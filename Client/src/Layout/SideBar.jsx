import React,{useContext, useState} from 'react'
import { ToastContainer } from 'react-toastify'
import { CategoryIcon, DashBoardIcon, Invoices, CloseIcon, 
  NotificationsIcon, ProfileIcon, SalesIcon, SettingsIcon, ShoppingIcon, TableIcon, PCIcon, MenuIcon, CloseMenuIcon } from '../Components/SVG/Icons'
import { Link } from 'react-router';
import AuthContext from '../Context/AuthContext';
const ICON_LIST = [
  {icon:"HomeIcon", description:"Principal"},
  {icon:"TableIcon", description:"Inventario"},
  {icon:"CategoryIcon", description:"Categoria"},
  {icon:"PCIcon", description:"Proveedor"},
  {icon:"ShoppingIcon", description:"Compras"},
  {icon:"SalesIcon", description:"Ventas"},
  {icon:"Invoices", description:"Movimientos"},
  {icon:"SettingsIcon", description:"Ajustes"},
  {icon:"ProfileIcon", description:"Perfil"},
  {icon:"NotificationsIcon", description:"Notificaciones"},
];

const ICON_MAP = {
    HomeIcon: DashBoardIcon,
    TableIcon: TableIcon,
    CategoryIcon: CategoryIcon,
    PCIcon: PCIcon,
    ShoppingIcon: ShoppingIcon,
    SalesIcon: SalesIcon,
    Invoices: Invoices,
    SettingsIcon: SettingsIcon,
    ProfileIcon: ProfileIcon,
    NotificationsIcon: NotificationsIcon,
};

const SideBar = () => {
  const {handleLoggout} = useContext(AuthContext);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <ToastContainer/>
    
      <div className={`
        ${menu ? 'flex' : 'hidden'} 
        md:flex 
        h-screen w-48 flex-col items-start absolute md:relative left-0 top-0 z-10 bg-3 text-white
      `}>
        <div className="flex justify-end w-full md:hidden">
          <div className="cursor-pointer p-2" onClick={() => setMenu(false)}>
            <CloseMenuIcon size={"24px"} color={"#ffffff"} />
          </div>
        </div>
        <div className="title flex flex-col pt-10 w-[100%]">
          <p className="text-xl font-bold italic mb-6 cursor-default text-center">Inventary_Name</p>
          <ul className='mr-2 justify-center w-[100%] '>
            {ICON_LIST.map(list => {
              const IconComponent = ICON_MAP[list.icon];
              if(IconComponent){
                return <Link key={list.description}  to={`/${list.description}`}>
                          <li className=" w-[100%] relative flex justify-start items-center my-2 p-2 cursor-pointer hover:border-b-2">
                            <IconComponent size={"18px"} color={"#ffffff"}/> 
                            <p className='ml-2 text-base not-italic font-semibold'>{list.description}</p>
                          </li>
                        </Link>
              }
              return ;
            })}
              <li className=" w-[100%] relative flex justify-start items-center my-2 p-2  hover:border-b-2 cursor-pointer">
                  <CloseIcon size={"18px"} color={"#ffffff"}/> 
                  <p onClick={handleLoggout} className='ml-2 text-base not-italic font-semibold'>Cerrar Seccion</p>
              </li>
          </ul>
        </div>
      </div>
      {!menu && (
        <div className='md:hidden absolute left-4 top-4 z-20'>
            <div className="cursor-pointer" onClick={() => setMenu(true)}>
              <MenuIcon size={"32px"} color={"black"} />
            </div>
        </div>
      )}
      
      
      

    </>
  )
}

export default SideBar
