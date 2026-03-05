import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'

const CrudeOpertionHome = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default CrudeOpertionHome

//npx json-server --watch backend/db.json --port=3000