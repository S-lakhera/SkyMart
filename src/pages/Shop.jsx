
import ProductCard from '../components/shop/ProductCard'
import { useLoaderData } from 'react-router'

const Shop = () => {

 const products = useLoaderData()
 console.log(products);
 
  
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
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none"><path d="m6 9 6 6 6-6"></path></svg>

          </div>

          <div class="relative">
            <select class=" h-10 pr-8 appearance-none cursor-pointer min-w-40 rounded-2xl text-[14px] px-4 border border-[#ffffff1a] bg-[#1d1d1d] text-white focus:outline-2 outline-primary/50 transition-all duration-200">
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="rating-desc">Top Rated</option>
              <option value="rating-asc">Lowest Rated</option>
            </select>

            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none"><path d="m6 9 6 6 6-6"></path></svg>
          </div>
        </div>

      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        {products.map((product) => {
          return <ProductCard product={product} />
        })}
      </div>

    </div>
  )
}

export default Shop
