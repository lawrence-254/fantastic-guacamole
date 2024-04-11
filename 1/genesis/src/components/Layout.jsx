import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import Footer from './Footer';

const OuterLayout = styled.div`
scroll
width: 100vw;
height: 100%;

`;
const InnerLayout = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Layout = ({ children }) => {
  return (
    <OuterLayout>
      <Navbar />
      <InnerLayout>
        {children}
      </InnerLayout>
      <Footer />
    </OuterLayout>
  );
};

export default Layout;