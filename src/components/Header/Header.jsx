import {
  HeaderContainer,
  HeaderTitleWrapperNoGoose,
  Title,
  HeaderTitleWrapperGoose,
  GooseMentorImg,
  TxtWrapper,
  Motivator,
  HeaderMenuWrapper,
  AddFeedbackBtn,
  UserInfoWrapper,
  ThemeToggleBtn,
  Vector,
  UserInfo,
  UserName,
  UserAvatar,
} from './Header.styled';
import GooseMentor1x from './header-img/goose-mentor-desktop@1x.webp';
import GooseMentor2x from './header-img/goose-mentor-desktop@2x.webp';
import SVG from './header-img/header-icons.svg';

const ThemeToggleIcon = ({ sprite, spriteId }) => {
  return (
    <Vector>
      <use href={`${sprite}#${spriteId}`} />
    </Vector>
  );
};

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitleWrapperNoGoose>
        <Title>Calendar</Title>
      </HeaderTitleWrapperNoGoose>

      {/* <HeaderTitleWrapperGoose>
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
      </HeaderTitleWrapperGoose> */}

      <HeaderMenuWrapper>
        <AddFeedbackBtn>Feedback</AddFeedbackBtn>
        <UserInfoWrapper>
          <ThemeToggleBtn>
            <ThemeToggleIcon sprite={SVG} spriteId="moon-icon" />
          </ThemeToggleBtn>
          <UserInfo>
            <UserName>Olexandr</UserName>
            <UserAvatar>O</UserAvatar>
          </UserInfo>
        </UserInfoWrapper>
      </HeaderMenuWrapper>
    </HeaderContainer>
  );
};

export default Header;
