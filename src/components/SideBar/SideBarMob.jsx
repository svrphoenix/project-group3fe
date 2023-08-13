import { TopWrapper } from './SideBar.styled';
import SideBarLogo from './SideBarLogo';
import UserNav from './UserNav';
import LogoutBtn from './LogoutBtn';
import { SideBarMobWrapper, Vector } from './SideBarMob.styled';
import SVG from './sidebar-and-header-images/sidebar-nav-icons.svg';
import { useState } from 'react';

const BurgerBtn = ({ sprite, spriteId }) => {
  return (
    <Vector>
      <use href={`${sprite}#${spriteId}`} />
    </Vector>
  );
};

const SideBarMob = () => {
  const [openPanel, setOpenPanel] = useState(false);

  return (
    <>
      <SideBarMobWrapper type={'left'} isOpen={openPanel} size={30}>
        <TopWrapper>
          <SideBarLogo />
          <UserNav />
        </TopWrapper>
        <LogoutBtn />
      </SideBarMobWrapper>
      <BurgerBtn
        sprite={SVG}
        spriteId="burger-icon"
        onClick={() => setOpenPanel(true)}
      />
    </>
  );
};

export default SideBarMob;
