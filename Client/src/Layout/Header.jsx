import React, { useContext, useEffect } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import AuthContext from '../Context/AuthContext';
import { OptionsHeaderIcon, } from '../Components/SVG/Icons';

const Header = () => {
    const {handleLoggout} = useContext(AuthContext);

    useEffect(() => {
        toast.success("Sección Iniciada");
    }, []);
  return (
    <>
    <div className="size-full flex justify-between items-center">
      
      <div className="options mr-6">
      <span className='p-2' onClick={handleLoggout}><OptionsHeaderIcon size={"24px"}/></span>
      </div>
      
    </div>
    </>
  )
}

export default Header
