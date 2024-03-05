import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Logout from '../Logout'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
        <Logout/>
    </div>
  )
}

export default Layout