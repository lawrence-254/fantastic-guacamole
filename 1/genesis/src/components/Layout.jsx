import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import Footer from './Footer';

const OuterLayout = styled.div`

`;
const InnerLayout = styled.div`
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