import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import { fetchProduct, getAllProducts } from '../api/ProductsApi'
import About from '../pages/About'
import ProductDetails from '../pages/ProductDetails'

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element: <AppLayout/>,
            children:[
                {
                    path:"",
                    element: <Home/>
                },
                {
                    path:"shop",
                    loader: getAllProducts,
                    hydrateFallbackElement:<h1>Products are loading....</h1>,
                    element: <Shop/>
                },

                {
                    path:"about",
                    
                    element:<About/>
                },

                {
                    path:"shop/:id",
                    loader: fetchProduct,
                    hydrateFallbackElement: <h1>Product card is loading...</h1> ,
                    element: <ProductDetails/>
                }
                
            ]
        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes
