import { styled } from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 335px;
  min-height: 290px;
  border-radius: 8px;
  border: 1px solid var(--modal-border-solid-color);
  box-shadow: var(--modal-box-shadow-color);
  padding: 20px;
  background-color: var(--first-Feedback-Bckg-Color);
  @media screen and (min-width: 768px) {
    width: 468px;
    padding: 32px;
  }
`;