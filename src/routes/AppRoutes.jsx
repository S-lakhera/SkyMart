import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'

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

                }
            ]
        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes
