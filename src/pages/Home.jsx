import React from 'react'
import { NavLink } from 'react-router'
import Hero from '../components/home/Hero'
import DIsplayCard from '../components/home/DIsplayCard'
import { Package, Star, TagIcon, TrendingUp } from 'lucide-react'
import { useCart } from '../components/context/CartContext'


const Home = () => {
const {cartItems,subtotal} = useCart();
const cardData = [ 
  {
    svg: <Package/>,
    heroText: cartItems.length,
    text1:"Cart Items",
    text2:"In your bag",
    iconStyle:"bg-primary/10 text-primary"
  },
  {
    svg: <TrendingUp/>,
    heroText:subtotal.toFixed(2),
    text1:"Cart Value",
    text2:"Ready to checkout",
    iconStyle:"bg-blue-500/10 text-blue-400"
  },
  {
    svg: <Star/> ,
    heroText:9,
    text1:"Top Products",
    text2:"Highly rated",
    iconStyle:"bg-amber-500/10 text-amber-400"
  },
  {
    svg: <TagIcon/> ,
    heroText:6,
    text1:"Categories",
    text2:"To Explore",
    iconStyle:"bg-violet-500/10 text-violet-400"
  },
]


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
