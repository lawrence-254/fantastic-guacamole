import React from 'react'
import styled from 'styled-components'

const CardLayout = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
}
`;

const CardImage = styled.img`
 width: 100%;
  height: auto;
`;
const CardContent= styled.div`
padding: 16px;
`;
const CardTitle = styled.h2`
 margin: 0;
  font-size: 18px;
  color: #333;
  `;

const CardDescription = styled.p`
 margin: 8px 0;
  color: #666;
`;

const Card = ({key, image, title, artist}) => {
  return (
    <CardLayout key={key}>
        <CardImage src={image} alt={title} />
        <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
          {artist}
            </CardDescription>
        </CardContent>
    </CardLayout>
    )
}

export default Card