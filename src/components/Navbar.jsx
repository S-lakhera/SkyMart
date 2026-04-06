import React from 'react'
import { NavLink } from 'react-router'
import { useState, useEffect } from 'react';
import { LogOut, ShoppingCart, Zap } from 'lucide-react';
import { useCart } from './context/CartContext';

const Navbar = () => {
  const {setIsCartOpen, cartItems } = useCart(); 

  // Calculate total items (e.g., if someone has 2 headphones, this shows 2)
  const totalItems = cartItems.length;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      
      if (e.deltaY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('wheel', handleScroll);
    
    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-99 w-full bg-bg/80 backdrop-blur-sm px-4 sm:px-6 py-2 transition-all duration-300 ${
      isScrolled ? "-translate-y-full border-b border-border" : "border-b border-transparent translate-y-0"
    }`}>
      <div className='h-full flex justify-between items-center py-1'>

        <NavLink to="/" className='flex gap-2 shrink-0 items-center'>
          <div className='bg-primary flex items-center justify-center rounded-xl w-8 h-8'>
            <Zap className='text-bg fill-bg w-4 '/>
          </div>
          <span className='font-bold text-lg font-heading'>Sky<span className='text-primary'>Mart</span></span>
        </NavLink>

        <div className='gap-6 flex text-muted text-sm  font-semibold'>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : ""}>Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-primary" : ""} to="/shop">Shop</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-primary" : ""} to="/about">About</NavLink>
        </div>

        <div className='flex gap-2 items-center text-muted'>

          <div className='flex  bg-card px-3 py-1.5 border border-border items-center gap-2 rounded-xl text-[13px]'>
            <div className='bg-primary rounded-md px-2 py-0.5 font-heading font-semibold text-black flex items-center'>S</div>
            <div className='text-text-muted'>Sagar</div>
          </div>

          <div className='flex gap-3'>

            <button
        onClick={() => setIsCartOpen(true)}
        className="relative p-2 cursor-pointer hover:bg-white/12 border border-white/10 rounded-xl transition-all hover:text-white"
      >
        <ShoppingCart className='w-5 h-5' />
        
        {totalItems > 0 && (
          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary text-bg text-[10px] font-bold rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

            <button title="Logout" className="px-2 py-2  cursor-pointer hover:bg-red-500/20 hover:border-red-500/30 border border-white/10 rounded-xl transition-all text-white/60 hover:text-red-400">
              <LogOut className='w-4 h-4' />
            </button>
          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar
