import React from 'react'
import { NavLink } from 'react-router'

const Hero = () => {
  return (
    
      <div className="relative overflow-hidden rounded-3xl bg-[#111] border border-white/80 p-8 sm:p-12 mb-10">
        <div className="absolute inset-0 pointer-events-none overflow-hidden ">
          <div className="absolute inset-0 opacity-[0.06] grid-bg" ></div>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <p className="text-primary/70 text-sm font-body tracking-widest uppercase mb-3">Good afternoon 👋</p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white leading-tight mb-4">Welcome back,
              <br />
              <span className="text-primary">sagar!</span>
            </h1>
            <p className="text-white/40 max-w-md">Discover today's picks — hand-curated products across electronics, fashion, and more.</p>
            <div className="flex gap-3 mt-6 flex-wrap">
              <NavLink className="py-3 px-6 text-black rounded-2xl font-semibold text-sm flex items-center gap-2 bg-primary hover:bg-[#e2ff66] transition-all duration-300" to="/shop">Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </NavLink>

              <a className="rounded-2xl font-semibold text-sm border py-3 px-6 border-border hover:border-white/70 transition-all duration-300 flex items-center gap-2" href="/products">View All Products</a>
            </div>
          </div>
          <div className="shrink-0 flex flex-col gap-3">
            <div className="bg-primary/10 border border-primary/20 rounded-2xl px-6 py-4 text-center">
              <p className="font-heading font-bold text-4xl text-volt">20+</p>
              <p className="text-white/40 text-xs font-body mt-1">Products Available</p>
            </div>
            <div className=" border border-white/80 rounded-2xl px-6 py-4 text-center">
              <p className="font-heading font-bold text-2xl text-white">Free</p>
              <p className="text-white/40 text-xs font-body mt-1">Delivery on ₹999+</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero
