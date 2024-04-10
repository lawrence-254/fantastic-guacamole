import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;
    top: 0;
`;
const NavItems = styled.a`
`;

const Navbar = () => {
  return (
    <NavbarContainer>Navbar</NavbarContainer>
  )
}

export default Navbar