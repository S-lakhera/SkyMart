import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <>
      <div className='h-16'>
        <Navbar/>
      </div>
      <div className='px-8 py-10'>
        <Outlet/>
      </div>
    </>
  )
}

export default AppLayout
