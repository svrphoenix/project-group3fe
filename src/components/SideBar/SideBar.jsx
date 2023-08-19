import { SideBarBox, TopWrapper, SideBarBackdrop } from './SideBar.styled';
import SideBarLogo from './SideBarLogo';
import UserNav from './UserNav';
import LogoutBtn from './LogoutBtn';

const SideBar = ({ isSideBarOpened, closeSideBar }) => {
  console.log('Show state: ', isSideBarOpened);

  return (
    <>
      <SideBarBox className={`${isSideBarOpened ? 'is-sidebar-opened' : ''}`}>
        <TopWrapper>
          <SideBarLogo closeSideBar={closeSideBar} />
          <UserNav closeSideBar={closeSideBar} />
        </TopWrapper>
        <LogoutBtn />
      </SideBarBox>
      <SideBarBackdrop
        className={`${isSideBarOpened ? 'is-sidebar-backdrop-opened' : ''}`}
        onClick={closeSideBar}
      />
    </>
  );
};

export default SideBar;
