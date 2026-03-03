import React from 'react'
import Navbar from './Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './MainPage'
import Home from './Home'
import About from './About'
import Project from './Project'
import Contact from './Contact'
const RoutingPage = () => {
    const Routes=createBrowserRouter([
        {
            path:"/",
            element:<MainPage/>,
            children:[
                {
                    path:"/Home",
                    element:<Home/>
                },
                {
                    path:"/About",
                    element:<About/>
                },
                {
                    path:"/Project",
                    element:<Project/>
                },
                {
                    path:"/Contact",
                    element:<Contact/>
                }
        
            ]

            
        
        }
    ])
  return <RouterProvider router ={Routes}/>
  

}

export default RoutingPage