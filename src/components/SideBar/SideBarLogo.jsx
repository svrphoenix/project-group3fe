import gooseDesktop1x from './sidebar-and-header-images/goose-desktop@1x.webp';
import gooseDesktop2x from './sidebar-and-header-images/goose-desktop@2x.webp';
import {
  SideBarLogoWrapper,
  LogoImg,
  LogoTxt,
  Vector,
} from './SideBarLogo.styled';
import SVG from './sidebar-and-header-images/sidebar-nav-icons.svg';
import AddSvg from 'components/AddSvg/AddSvg';

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
      <AddSvg component={Vector} sprite={SVG} spriteId="cross-icon" />
    </SideBarLogoWrapper>
  );
};

export default SideBarLogo;
