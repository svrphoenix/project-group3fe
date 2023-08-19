import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {
  MainContainer,
  ContentWrapper,
  ContentInnerBox,
} from './MainLayout.styled';
import SideBar from 'components/SideBar/SideBar';
import Header from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import useAuth from 'hooks/useAuth';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const MainLayout = () => {
  const { isLoggedIn } = useAuth();
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  useEffect(() => {
    if (isDesktop) {
      setIsSideBarOpened(false);
    }
  }, [isDesktop]);

  function addScrollLock() {
    const lockedWidth = document.documentElement.clientWidth;
    document.body.style.width = `${lockedWidth}px`;
    document.body.classList.add('add-scroll-lock');
  }

  function removeScrollLock() {
    document.body.classList.remove('add-scroll-lock');
    document.body.style.width = '100%';
  }

  function openSideBar() {
    addScrollLock();
    setIsSideBarOpened(true);
  }

  function closeSideBar() {
    removeScrollLock();
    setIsSideBarOpened(false);
  }

  return (
    <>
      {!isLoggedIn && <Navigate to={'/'} />}
      {isLoggedIn && (
        <MainContainer>
          <SideBar
            isSideBarOpened={isSideBarOpened}
            closeSideBar={closeSideBar}
          />
          <ContentWrapper>
            <ContentInnerBox>
              <Header
                isSideBarOpened={isSideBarOpened}
                openSideBar={openSideBar}
              />
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </ContentInnerBox>
          </ContentWrapper>
        </MainContainer>
      )}
    </>
  );
};

export default MainLayout;
