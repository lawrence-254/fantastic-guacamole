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
    color: #999;
    cursor: pointer
`;

const Navbar = () => {
  const homeButton=<a></a>;
  const artList=<a></a>;
  const artistListLink=<a></a>;

  const search=<a></a>;
  return (
    <NavbarContainer>
      <NavItems>
        Gallery Art
      </NavItems>
         <NavItems>
        Genres
      </NavItems>
         <NavItems>
        Artist
      </NavItems>
         <NavItems>
        one
      </NavItems>
    </NavbarContainer>
  )
}

export default Navbar