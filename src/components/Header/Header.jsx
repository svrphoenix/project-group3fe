import {
  HeaderContainer,
  HeaderTitleWrapperNoGoose,
  Title,
  HeaderTitleWrapperGoose,
  GooseMentorImg,
  TxtWrapper,
  Motivator,
  HeaderMenuWrapper,
  UserInfoWrapper,
} from './Header.styled';
import GooseMentor1x from './header-img/goose-mentor-desktop@1x.webp';
import GooseMentor2x from './header-img/goose-mentor-desktop@2x.webp';
import AddFeedbackBtn from './AddFeedbackBtn';
import ThemeToggleBtn from './ThemeToggleBtn';
import UserInfo from './UserInfo';

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
        <AddFeedbackBtn />
        <UserInfoWrapper>
          <ThemeToggleBtn />
          <UserInfo />
        </UserInfoWrapper>
      </HeaderMenuWrapper>
    </HeaderContainer>
  );
};

export default Header;
