import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import { getAllProducts } from '../api/ProductsApi'

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
                    path:"/shop",
                    loader: async () => {
                        let data = await getAllProducts()
                        return data;
                    },
                    hydrateFallbackElement:<h1>Products are loading....</h1>,
                    element: <Shop/>
                }
            ]
        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes
