import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import { Outlet } from 'react-router-dom'
import MainLayout from '../../components/MainLayout'
const HomePage = () => {
  return (
    <div className='flex-grow'>
      <div>
        <MainLayout />
      </div>
    
    <Outlet />
</div>

  )
}

export default HomePage