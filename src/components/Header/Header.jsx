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
  BurgerBtn,
  Vector,
} from './Header.styled';
import GooseMentor1x from './header-img/goose-mentor-desktop@1x.webp';
import GooseMentor2x from './header-img/goose-mentor-desktop@2x.webp';
import ThemeToggleBtn from './ThemeToggleBtn';
import UserInfo from './UserInfo';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { FeedbackButton } from 'components/FeedbackButton/FeedbackButton';
import SVG from './header-img/header-icons.svg';
import AddSvg from 'components/AddSvg/AddSvg';

const Header = ({ isSideBarOpened, openSideBar }) => {
  const tasks = useSelector(selectTasks);
  const location = useLocation();

  const pageConfig = [
    { path: 'account', page: 'User Profile' },
    { path: 'calendar', page: 'Calendar' },
    { path: 'statistics', page: 'Statistics' },
  ];

  const activePage = pageConfig.find(item =>
    location.pathname.includes(item.path)
  ).page;

  return (
    <HeaderContainer>
      {(tasks.length < 1 ||
        (tasks.length > 0 && activePage !== 'Calendar')) && (
        <HeaderTitleWrapperNoGoose>
          <Title>{activePage}</Title>
        </HeaderTitleWrapperNoGoose>
      )}

      {tasks.length > 0 && activePage === 'Calendar' && (
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
            <Title>{activePage}</Title>
            <Motivator>
              <span>Let go</span> of the past and focus on the present!
            </Motivator>
          </TxtWrapper>
        </HeaderTitleWrapperGoose>
      )}

      {!isSideBarOpened && (
        <BurgerBtn
          type="button"
          aria-label="Open mobile menu"
          onClick={openSideBar}
        >
          <AddSvg component={Vector} sprite={SVG} spriteId="burger-icon" />
        </BurgerBtn>
      )}

      <HeaderMenuWrapper>
        <FeedbackButton />
        <UserInfoWrapper>
          <ThemeToggleBtn />
          <UserInfo />
        </UserInfoWrapper>
      </HeaderMenuWrapper>
    </HeaderContainer>
  );
};

export default Header;
