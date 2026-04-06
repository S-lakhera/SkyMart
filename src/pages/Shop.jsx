
import { ChevronDown, Search } from 'lucide-react';
import ProductCard from '../components/shop/ProductCard'
import { useLoaderData } from 'react-router'

const Shop = () => {

 const products = useLoaderData()
 
  
  return (
    <div>
      <div className='mb-8'>
        <h1 className='font-heading font-bold text-3xl sm:text-4xl mb-2'>
          All Products
        </h1>
        <p className='text-white/40 font-body text-sm'>30 Products found</p>
      </div>

      <div className='bg-[#111] border border-white/80 rounded-2xl p-4 mb-6'>

        <div className='flex flex-col sm:flex-row gap-3'>

          <div class="relative flex-1 ">
            <Search className='absolute left-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none w-4' />
            
            <input type="text" placeholder="Search products..." class="rounded-2xl text-[14px] px-4 border border-[#ffffff1a] bg-[#1d1d1d] text-white  pl-10 pr-8 h-10 w-full focus:outline-2 outline-primary/50 transition-all duration-200" value="" />
          </div>

          <div class="relative">
            <select class=" h-10 pr-8 appearance-none cursor-pointer min-w-40 rounded-2xl text-[14px] px-4 border border-[#ffffff1a] bg-[#1d1d1d] text-white focus:outline-2 outline-primary/50 transition-all duration-200">
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="furniture">Furniture</option>
              <option value="home">Home</option>
              <option value="sports">Sports</option>
              <option value="accessories">Accessories</option>
            </select>
            <ChevronDown className='absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none w-3.5' />
            

          </div>

          <div class="relative">
            <select class=" h-10 pr-8 appearance-none cursor-pointer min-w-40 rounded-2xl text-[14px] px-4 border border-[#ffffff1a] bg-[#1d1d1d] text-white focus:outline-2 outline-primary/50 transition-all duration-200">
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="rating-desc">Top Rated</option>
              <option value="rating-asc">Lowest Rated</option>
            </select>

            <ChevronDown className='absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none w-3.5' />
          </div>
        </div>

      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>

    </div>
  )
}

export default Shop
