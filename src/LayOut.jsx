import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Pages/Footer'

const LayOut = () => {
  return (
    <div className ="p-4 flex flex-col">
      <Header   />
      <Outlet />
     
     
    </div>
  )
}

export default LayOut
