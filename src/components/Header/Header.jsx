import {
  HeaderContainer,
  HeaderTitleWrapperNoGoose,
  Title,
  HeaderTitleWrapperGoose,
  GooseMentorImg,
  TxtWrapper,
  Motivator,
  HeaderMenuWrapper,
  FeedbackBtn,
  UserInfoWrapper,
  ThemeToggleBtn,
  ThemeToggleImg,
} from './Header.styled';
import GooseMentor1x from './header-img/goose-mentor-desktop@1x.webp';
import GooseMentor2x from './header-img/goose-mentor-desktop@2x.webp';
import SunIcon from './header-img/sun-icon.svg';
import MoonIcon from './header-img/moon-icon.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitleWrapperNoGoose>
        <Title>Calendar</Title>
      </HeaderTitleWrapperNoGoose>

      <HeaderTitleWrapperGoose>
        <picture>
          <source
            srcSet={`${GooseMentor1x} 1x, ${GooseMentor2x} 2x`}
            media="(min-width: 1440px)"
            type="image/webp"
          />
          <GooseMentorImg
            src={`${GooseMentor1x}`}
            alt="GooseMentor"
            width="64"
          />
        </picture>
        <TxtWrapper>
          <Title>Calendar</Title>
          <Motivator>
            <span>Let go</span> of the past and focus on the present!
          </Motivator>
        </TxtWrapper>
      </HeaderTitleWrapperGoose>

      <HeaderMenuWrapper>
        <FeedbackBtn>Feedback</FeedbackBtn>
        <UserInfoWrapper>
          <ThemeToggleBtn>
            <ThemeToggleImg
              src={`${MoonIcon}`}
              alt="Moon"
              aria-label="Toggle theme"
            />
          </ThemeToggleBtn>
        </UserInfoWrapper>
      </HeaderMenuWrapper>
    </HeaderContainer>
  );
};

export default Header;
