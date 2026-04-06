import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import { CartProvider } from '../components/context/CartContext'
import CartSidebar from '../components/cart/CartSidebar'

const AppLayout = () => {
  return (
    <CartProvider >
      <div>
        <CartSidebar/>
      </div>
      <div className='h-16'>
        <Navbar/>
      </div>
      <div className='px-8 py-10'>
        <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
    </CartProvider>
  )
}

export default AppLayout
