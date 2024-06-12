import React from 'react'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'

const Layout = (props) => {
  const {children} = props
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout