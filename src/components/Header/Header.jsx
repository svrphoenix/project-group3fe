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
import { IMG } from '../../images';
import ThemeToggleBtn from './ThemeToggleBtn';
import UserInfo from './UserInfo';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { FeedbackButton } from 'components/FeedbackButton/FeedbackButton';
import AddSvg from 'components/AddSvg/AddSvg';
import getSvg from '../../utils/getSvg';
import { useEffect } from 'react';
import useAuth from 'hooks/useAuth';
import { getReview } from 'redux/review/operations';
import LangSwitcher from 'LangSwitcher/LangSwitcher';

const { gooseMentor1x, gooseMentor2x } = IMG;
const SVG = getSvg();

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

  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) dispatch(getReview());
  }, [dispatch, isLoggedIn]);

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
              srcSet={`${gooseMentor1x} 1x, ${gooseMentor2x} 2x`}
              media="(min-width: 1440px)"
              type="image/webp"
            />
            <GooseMentorImg
              src={`${gooseMentor1x}`}
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
        <LangSwitcher />
        <UserInfoWrapper>
          <ThemeToggleBtn />
          <UserInfo />
        </UserInfoWrapper>
      </HeaderMenuWrapper>
    </HeaderContainer>
  );
};

export default Header;
