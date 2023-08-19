import {
  SideBarLogoWrapper,
  LogoImg,
  LogoTxt,
  CloseSideBarBtn,
  Vector,
} from './SideBarLogo.styled';
import AddSvg from 'components/AddSvg/AddSvg';
import getSvg from '../../utils/getSvg';
import { IMG } from '../../images';

const {
  gooseMobile1x,
  gooseMobile2x,
  gooseTablet1x,
  gooseTablet2x,
  gooseDesktop1x,
  gooseDesktop2x,
} = IMG;
const SVG = getSvg();

const SideBarLogo = ({ closeSideBar }) => {
  return (
    <SideBarLogoWrapper>
      <picture>
        <source
          srcSet={`${gooseDesktop1x} 1x, ${gooseDesktop2x} 2x`}
          media="(min-width: 1440px)"
          type="image/webp"
        />
        <source
          srcSet={`${gooseTablet1x} 1x, ${gooseTablet2x} 2x`}
          media="(min-width: 768px)"
          type="image/webp"
        />
        <source
          srcSet={`${gooseMobile1x} 1x, ${gooseMobile2x} 2x`}
          media="(max-width: 767px)"
          type="image/webp"
        />
        <LogoImg src={`${gooseDesktop1x}`} alt="Logo" width="71" />
      </picture>
      <LogoTxt>
        G<span>oo</span>seTrack
      </LogoTxt>
      <CloseSideBarBtn
        type="button"
        aria-label="Close sidebar"
        onClick={closeSideBar}
      >
        <AddSvg component={Vector} sprite={SVG} spriteId="cross-icon" />
      </CloseSideBarBtn>
    </SideBarLogoWrapper>
  );
};

export default SideBarLogo;
