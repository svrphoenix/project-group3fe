import styled from 'styled-components';

export const SideBarBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: var(--third-Bckg-Color);
  width: 225px;
  /* min-height: 100vh; */
  min-height: 100%;
  padding: 24px 20px;
  transform: translateX(-225px);
  transition: transform var(--cubic);

  &.is-sidebar-opened {
    transform: translateX(0);
  }

  @media screen and (min-width: 768px) {
    width: 289px;
    padding: 24px 32px;
    transform: translateX(-289px);
  }

  @media screen and (min-width: 1440px) {
    z-index: 0;
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
  /* width: 100vw;
  height: 100vh; */
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.3);

  &.is-sidebar-backdrop-opened {
    display: block;
    pointer-events: auto;
  }
`;
