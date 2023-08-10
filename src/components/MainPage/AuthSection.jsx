import { IMG, SVG } from 'images';
import * as SC from './MainPage.styled';

export const AuthSection = () => {
  return (
    <SC.HeroSection>
      <SC.Container>
        <SC.HeroWrapper>
          <picture>
            <source
              srcSet={`${IMG.logoXl} 1x, ${IMG.logox2Xl} 2x`}
              type="image/jpg"
              media="(min-width: 768px)"
            />
            <img
              srcSet={`${IMG.logo} 1x, ${IMG.logox2} 2x`}
              alt="Goose track logo"
            />
          </picture>
          <SC.HeroTitle>
            G<i>o</i>
            <i style={{ letterSpacing: 3 }}>o</i>se Track
          </SC.HeroTitle>
          <SC.NavList>
            <SC.NavItem>
              <SC.NavLinkBtn to={'/login'}>
                Log in
                <SVG.LoginIcon />
              </SC.NavLinkBtn>
            </SC.NavItem>
            <SC.NavItem>
              <SC.NavLink to={'/signup'}>Sign up</SC.NavLink>
            </SC.NavItem>
          </SC.NavList>
        </SC.HeroWrapper>
      </SC.Container>
    </SC.HeroSection>
  );
};
