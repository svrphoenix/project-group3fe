const { styled, keyframes } = require('styled-components');

const movebtn = keyframes`
    0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }`;

export const ScrollToTopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & > svg {
    background-color: #345ea1;
    border: 2px solid #fff;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    color: #fff;
    cursor: pointer;
    animation: ${movebtn} 3s ease-in-out infinite;
    transition: all 0.5s ease-in-out;

    position: fixed;
    bottom: 40px;
    right: 25px;
    z-index: 20;

    &:hover {
      /* animation: none; */
      background: #fff;
      color: #345ea1;
      border: 2px solid #345ea1;
    }
  }
`;
