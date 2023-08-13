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
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  // let activePage = '';

  // location.pathname.includes('account') && (activePage = 'User Profile');
  // location.pathname.includes('calendar') && (activePage = 'Calendar');
  // location.pathname.includes('statistics') && (activePage = 'Statistics');

  const pageConfig = [
    { path: 'account', page: 'User Profile' },
    { path: 'calendar', page: 'Calendar' },
    { path: 'statistics', page: 'Statistics' },
  ];

  const activePage = pageConfig.find(item =>
    location.pathname.includes(item.path)
  ).page;

  // switch (location.pathname) {
  //   case '/account':
  //     activePage = 'User Profile';
  //     break;
  //   case '/calendar':
  //     activePage = 'Calendar';
  //     break;
  //   case '/statistics':
  //     activePage = 'Statistics';
  //     break;
  //   default:
  //     activePage = 'My account';
  // }

  return (
    <HeaderContainer>
      <HeaderTitleWrapperNoGoose>
        <Title>{activePage}</Title>
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
