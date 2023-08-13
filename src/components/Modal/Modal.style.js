import { styled } from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 335px;
  min-height: 290px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  padding: 20px;
  background-color: #fff;
  @media screen and (min-width: 768px) {
    width: 468px;
    padding: 32px;
  }
`;
