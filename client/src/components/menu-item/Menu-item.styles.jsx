import styled from "styled-components";

const gridColums = {
  '1': '1 / span 2',
  '2': '3 / span 2',
  '3': '5 / span 2',
  '4': '1 / span 3',
  '5': '4 / span 3'
}

export const MenuItemContainer = styled.article`
  min-width: 30%;
  height: ${({ size }) => size === 'large' ? '380px' : '240px'};
  
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;

  grid-column: ${({ id }) => gridColums[`${id}`]};
  grid-row: ${({ id }) => id === 4 ? '2 / - 1' : ''};

  &:hover {
    cursor: pointer;

    & img {
      transform: scale(1.1);
      transition: transform 5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & section {
      opacity: 0.9;
    }
  }

  @media (max-width: 800px) {
    grid-column: 1 / -1;
    height: 240px;
  }
`;

export const BGImage = styled.img`
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.section`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
