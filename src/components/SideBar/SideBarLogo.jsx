import gooseDesktop1x from '../../img/sidebar-and-header/goose-desktop@1x.webp';
import gooseDesktop2x from '../../img/sidebar-and-header/goose-desktop@2x.webp';
import { SideBarLogoWrapper, LogoImg, LogoTxt } from './SideBarLogo.styled';

const SideBarLogo = () => {
  return (
    <SideBarLogoWrapper>
      <picture>
        <source
          srcSet={`${gooseDesktop1x} 1x, ${gooseDesktop2x} 2x`}
          media="(min-width: 1440px)"
          type="image/webp"
        />
        <LogoImg src={`${gooseDesktop1x}`} alt="Logo" width="71" />
      </picture>
      <LogoTxt>
        G<span>oo</span>seTrack
      </LogoTxt>
    </SideBarLogoWrapper>
  );
};

export default SideBarLogo;
