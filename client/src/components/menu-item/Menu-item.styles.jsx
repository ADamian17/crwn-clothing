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
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  grid-column: ${({ id }) => gridColums[`${id}`]};
  grid-row: ${({ id }) => id === 4 ? '2 / - 1' : ''};

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  @media (max-width: 800px) {
    grid-column: 1 / -1;
    height: 240px;
  }
`;

// .menu - item {

//   .background - image {
//     width: 100 %;
//     height: 100 %;
//     background - size: cover;
//     background - position: center;
//   }

//   .content {
//     height: 90px;
//     padding: 0 25px;
//     display: flex;
//     flex - direction: column;
//     align - items: center;
//     justify - content: center;
//     border: 1px solid black;
//     background - color: white;
//     opacity: 0.7;
//     position: absolute;

//     .title {
//       font - weight: bold;
//       margin: 0 6px 0;
//       font - size: 22px;
//       color: #4a4a4a;
//     }

//     .subtitle {
//       font - weight: lighter;
//       font - size: 16px;
//     }
//   }
// }