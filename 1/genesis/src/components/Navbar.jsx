import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import  {checkScreenSize}  from '../utils/screenSizeChecker';
import { useNavigate } from 'react-router-dom';

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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem;
    background-color: #333;
    color: #888;
    z-index: 10;
    height: auto;
  }
`;

const NavItems = styled.a`
  color: #999;
  cursor: pointer;
  margin: 0 0.5rem;

  &:hover {
    color: white;
    background-color: #111;
    padding: 0.25rem;
    border-radius: 0.25rem;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    margin: 0.25rem 0;
  }
`;

const MobileMenuButton = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Navbar = () => {
  const isMobile = checkScreenSize();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();



  const items = [
  { key: 'Gallery Art', value: '/home' },
  { key: 'Genres', value: '/genres' },
  { key: 'Artist', value: '/artists' },
];

  const desktop = (
    <NavbarContainer>
      {items.map((item, index) => (
        <NavItems key={index} onClick={() => navigate(`${item.value}`)}>
          {item.key.toUpperCase()}
        </NavItems>
      ))}
    </NavbarContainer>
  );

  const mobile = (
    <NavbarContainer>
      <MobileMenuButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? 'X' : '☰'}
      </MobileMenuButton>
      {showMobileMenu && (
        <>
          {items.map((item, index) => (
            <NavItems key={index} onClick={() => navigate(item.value)}>
              {item.key.toUpperCase()}
            </NavItems>
          ))}
        </>
      )}
    </NavbarContainer>
  );


  return (
    <>
    {isMobile? mobile: desktop}
    </>
  )
}

export default Navbar