import { SideBarBox, TopWrapper } from './SideBar.styled';
import SideBarLogo from './SideBarLogo';
import UserNav from './UserNav';
import LogoutBtn from './LogoutBtn';

const SideBar = () => {
  return (
    <SideBarBox>
      <TopWrapper>
        <SideBarLogo />
        <UserNav />
      </TopWrapper>
      <LogoutBtn />
    </SideBarBox>
  );
};

export default SideBar;
