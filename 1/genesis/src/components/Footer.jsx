import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: 888;
    bottom: 0;
    left:0;
    width:100%;
    position: fixed;
`;

const FooterItems = styled.p`
    color: #999;
    cursor: pointer;

`

const Footer = () => {
    const dates = new Date()
    const date = dates.getFullYear();
    const items = [`${date} all rights reserved@Gallery Art`, 'About us']
  return (
    <FooterContainer>
        {items.map((item, index) => (
            <FooterItems key={index}>
            {item}
            </FooterItems>
        ))}
    </FooterContainer>
  )
}

export default Footer