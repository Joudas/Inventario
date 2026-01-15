import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router'
import Footer from './Footer'
const Layout = () => {
  return (
    <div className='w-full h-screen flex'>
      <div className="bg-3 text-white overflow-y-auto flex-shrink-0">
        <SideBar/>
      </div>
      <div className="flex-1 bg-white flex flex-col overflow-y-auto overflow-x-hidden">
        <div className="flex-1 flex flex-col">
          <Outlet/>
        </div>
        <div className="text-white bg-3 flex-shrink-0 py-6 border-t border-gray-600">
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Layout
