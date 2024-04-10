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
    width: 100%;
    height: 3rem;
`;
const NavItems = styled.a`
    color: #999;
    cursor: pointer;
    &:hover{
        color: white;
        background-color: #111;
        padding: 0.25rem;
        border-radius: 0.25rem;
    }
`;

const Navbar = () => {
  const homeButton=<a></a>;
  const artistList=<a></a>;
  const genreListLink=<a></a>;
  const search=<a></a>;

  const items = [
  { key: 'Gallery Art', value: homeButton },
  { key: 'Genres', value: genreListLink },
  { key: 'Artist', value: artistList },
  { key: 'search', value: search }
];
  return (
    <NavbarContainer>
      {items.map((item, index) => (
        <NavItems key={index}>
          {item.key}
        </NavItems>
      ))}
    </NavbarContainer>
  )
}

export default Navbar