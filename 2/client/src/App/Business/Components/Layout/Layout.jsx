import React from 'react'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'

import './layout.css'

const Layout = (props) => {
  const {children} = props
  return (
    <div className='container'>
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='dynamicContainer'>
      <Navbar/>
        {children}
      <Footer/>
      </div>
    </div>
  )
}

export default Layout