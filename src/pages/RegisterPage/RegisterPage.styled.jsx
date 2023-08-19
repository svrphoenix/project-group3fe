import styled from 'styled-components';

export const StyledLayout = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #dcebf7;
  position: relative;
`;

export const StyledSharedContainer = styled.div`
  position: absolute;
  top: 50%;              
  left: 50%;         
  width: 100%;
  padding: 0 15px;       
  transform: translate(-50%, -50%);
  margin: 0 auto;
`
export const StyledPicture = styled.picture`
  position: absolute;
  bottom: 0;
  left: 49px;
`
export const StyledImg = styled.img`
  display:none;
  @media (min-width: 1440px) {
    display:block;
  }
`