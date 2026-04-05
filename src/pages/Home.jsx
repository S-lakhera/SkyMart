import React from 'react'
import { NavLink } from 'react-router'
import Hero from '../components/home/Hero'
import DIsplayCard from '../components/home/DIsplayCard'

const cardData = [
  {
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-package">
      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
      <path d="M12 22V12"></path>
      <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
      <path d="m7.5 4.27 9 5.15"></path>
    </svg>,
    heroText:1,
    text1:"Cart Items",
    text2:"In your bag",
    iconStyle:"bg-primary/10 text-primary"
  },
  {
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up-icon lucide-trending-up"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>,
    heroText:1,
    text1:"Cart Value",
    text2:"Ready to checkout",
    iconStyle:"bg-blue-500/10 text-blue-400"
  },
  {
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>,
    heroText:1,
    text1:"Top Products",
    text2:"Highly rated",
    iconStyle:"bg-amber-500/10 text-amber-400"
  },
  {
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tag-icon lucide-tag"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>,
    heroText:1,
    text1:"Categories",
    text2:"To Explore",
    iconStyle:"bg-violet-500/10 text-violet-400"
  },
]

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
        {cardData.map((card) => <DIsplayCard card={card}/>)}
      </div>
    </div>
  )
}

export default Home
