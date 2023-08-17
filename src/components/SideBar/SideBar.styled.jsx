import styled from 'styled-components';

const animate = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

export const SideBarBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;
  width: 225px;
  min-height: 100vh;
  padding: 24px 20px;
  transform: translateX(-225px);
  transition: transform ${animate};

  &.is-sidebar-opened {
    transform: translateX(0);
  }

  @media screen and (min-width: 768px) {
    width: 289px;
    padding: 24px 32px;
    transform: translateX(-289px);
  }

  @media screen and (min-width: 1440px) {
    position: static;
    padding: 32px 24px 24px 24px;
    transform: translateX(0);
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: 768px) {
    gap: 50px;
  }

  @media screen and (min-width: 1440px) {
    gap: 32px;
  }
`;

export const SideBarBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  display: none;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.3);

  &.is-sidebar-backdrop-opened {
    display: block;
    pointer-events: auto;
  }
`;
