import React from 'react'
import Navbar from './pages/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import MainPage from './pages/MainPage'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PrivateRouting from './privaerouting/PrivateRouting'
import Dashboard from './pages/Dashboard'

const RouterLayout = () => {
    const routes=createBrowserRouter([
        {
            path:"/",
            element:<MainPage/>,
            children:[
                {
                    path:"/home",
                    element:<Home/>
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/project",
                    element:<Project/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                }
                ,
                {
                    path:"/login",
                    element:<Login/>
                },
                {
                    path:"/dashboard",
                    element:<PrivateRouting>
                        <Dashboard/>
                    </PrivateRouting>
                }

            ]
        }
        
    ])
  return <RouterProvider router={routes}/>
}

export default RouterLayout