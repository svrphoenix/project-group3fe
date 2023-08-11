import gooseDesktop1x from '../../img/sidebar-and-header/goose-desktop@1x.webp';
import gooseDesktop2x from '../../img/sidebar-and-header/goose-desktop@2x.webp';

const SideBar = () => {
  return (
    <SideBarBox>
      <TopWrapper>
        <Logo>
          <picture>
            <source
              srcset={`${gooseDesktop1x}, ${gooseDesktop2x} 2x`}
              media="(min-width: 1440px)"
              type="image/webp"
            />
            <LogoImg src={`${gooseDesktop1x}`} alt="Logo" width="71" />
          </picture>
          <LogoTxt>GooseTrack</LogoTxt>
        </Logo>
        <PanelName>User panel</PanelName>
        <UserNav />
      </TopWrapper>
      <LogoutBtn />
    </SideBarBox>
  );
};

export default SideBar;
