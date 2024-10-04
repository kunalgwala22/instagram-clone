import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from './SideNavbar'


const MainLayout = () => {
  return (
    <div>
         <SideNavbar/>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout