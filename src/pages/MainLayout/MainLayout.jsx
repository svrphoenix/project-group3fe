import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer, ContentWrapper } from './MainLayout.styled';
import SideBar from 'components/SideBar/SideBar';
import Header from 'components/Header/Header';
// import SideBarMob from 'components/SideBar/SideBarMob';

const MainLayout = () => {
  return (
    <>
      {/* <SideBarMob /> */}
      <MainContainer>
        <SideBar />
        <ContentWrapper>
          <Header />
          <Suspense fallback={<div>LOADING....</div>}>
            <Outlet />
          </Suspense>
        </ContentWrapper>
      </MainContainer>
    </>
  );
};

export default MainLayout;
