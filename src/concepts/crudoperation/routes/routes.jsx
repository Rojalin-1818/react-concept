import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/layout'
import Navbar from '../../practise/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Help from '../pages/Help'
import Login from '../pages/Login'
import Register from '../pages/Register'

export const routes = createBrowserRouter(
    [
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    path:"/",
                    element:<Home/>
                },
                {
                    path:"/about",
                element:<About/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                },
                {
                    path:"/help",
                    element:<Help/>
                }
                
               
            ]
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
                    path:"/register",
                    element:<Register/>
                }
    ]
)

