import React from 'react'
import { NavLink } from 'react-router'
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scroll is greater than 10px (or 70 as you had)
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-99 w-full bg-bg/50 backdrop-blur-sm text-white px-4 sm:px-6 py-2 transition-all duration-200 ${
      isScrolled ? "border-b border-white/80" : "border-b border-transparent"
    }`}>
      <div className='h-full flex justify-between items-center py-1'>

        <NavLink to="/" className='flex gap-2 shrink-0 items-center'>
          <div className='bg-primary flex items-center justify-center rounded-xl w-9 h-9'>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-zap-icon lucide-zap text-[#0d0d0d] fill-[#0d0d0d]"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
          </div>
          <span className='font-bold text-xl font-heading'>Sky<span className='text-primary'>Mart</span></span>
        </NavLink>

        <div className='gap-7 flex text-text-muted text-[15px] font-semibold'>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : ""}>Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-primary" : ""} to="/shop">Shop</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-primary" : ""} to="/about">About</NavLink>
        </div>

        <div className='flex gap-2 items-center'>

          <div className='flex  bg-card px-3 py-1.5 border border-border items-center gap-2 rounded-xl text-[13px]'>
            <div className='bg-primary rounded-md px-2 py-0.5 font-heading font-semibold text-black flex items-center'>S</div>
            <div className='text-text-muted'>Sagar</div>
          </div>

          <div className='flex gap-3'>

            <button className="relative p-3 bg-card cursor-pointer hover:bg-white/12 border border-white/10 rounded-xl transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart">
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary text-[#0d0d0d] text-[10px] font-bold rounded-full flex items-center justify-center">1</span>
            </button>

            <button title="Logout" className="p-3 bg-card cursor-pointer hover:bg-red-500/20 hover:border-red-500/30 border border-white/10 rounded-xl transition-all text-white/60 hover:text-red-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-log-out">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" x2="9" y1="12" y2="12"></line>
              </svg>
            </button>
          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar
