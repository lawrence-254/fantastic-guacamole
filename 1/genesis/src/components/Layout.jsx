import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import Footer from './Footer';

const OuterLayout = styled.div`
width: 100%;
height: 100%;

`;
const InnerLayout = styled.div`
width: 100%;
height: 80%
`;
const Layout = () => {
  return (
    <OuterLayout>
        <Navbar/>
        <InnerLayout>

        </InnerLayout>
        <Footer/>
    </OuterLayout>
  )
}

export default Layout