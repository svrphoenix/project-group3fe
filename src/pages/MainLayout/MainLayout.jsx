import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MainContainer, ContentWrapper } from './MainLayout.styled';
import SideBar from 'components/SideBar/SideBar';
import Header from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import useAuth from 'hooks/useAuth';
// import SideBarMob from 'components/SideBar/SideBarMob';

const MainLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {!isLoggedIn && <Navigate to={'/'} />}
      {isLoggedIn && (
        <MainContainer>
          <SideBar />
          <ContentWrapper>
            <Header />
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
