import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MainContainer, ContentWrapper } from './MainLayout.styled';
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

  function openSideBar() {
    setIsSideBarOpened(true);
  }

  function closeSideBar() {
    setIsSideBarOpened(false);
  }

  return (
    <>
      {!isLoggedIn && <Navigate to={'/'} />}
      {isLoggedIn && (
        <MainContainer>
          <SideBar
            isSideBarOpened={isSideBarOpened}
            openSideBar={openSideBar}
            closeSideBar={closeSideBar}
          />
          <ContentWrapper>
            <Header openSideBar={openSideBar} />
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </ContentWrapper>
        </MainContainer>
      )}
    </>
  );
};

export default MainLayout;
