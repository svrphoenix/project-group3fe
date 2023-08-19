import { SideBarBox, TopWrapper, SideBarBackdrop } from './SideBar.styled';
import SideBarLogo from './SideBarLogo';
import UserNav from './UserNav';
import LogoutBtn from './LogoutBtn';

const SideBar = ({ isSideBarOpened, openSideBar, closeSideBar }) => {
  return (
    <>
      <SideBarBox
        className={`${isSideBarOpened === true ? 'is-sidebar-opened' : ''}`}
      >
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
