import {
  UserNavWrapper,
  UserNavHeading,
  UserNavList,
  UserNavItem,
  UserNavLink,
  Vector,
  UserNavTxt,
} from './UserNav.styled';
import SVG from './sidebar-and-header-images/sidebar-nav-icons.svg';
import AddSvg from 'components/AddSvg/AddSvg';

const UserNav = () => {
  const navListConfig = [
    { linkTo: 'account', iconId: 'user-icon', linkName: 'My account' },
    { linkTo: 'calendar', iconId: 'calendar-icon', linkName: 'Calendar' },
    { linkTo: 'statistics', iconId: 'user-icon', linkName: 'My account' },
  ];

  return (
    <UserNavWrapper>
      <UserNavHeading>User Panel</UserNavHeading>
      <UserNavList>
        <UserNavItem>
          <UserNavLink to="account">
            <AddSvg component={Vector} sprite={SVG} spriteId="user-icon" />
            <UserNavTxt>My account</UserNavTxt>
          </UserNavLink>
        </UserNavItem>
        <UserNavItem>
          <UserNavLink to="calendar">
            <AddSvg component={Vector} sprite={SVG} spriteId="calendar-icon" />
            <UserNavTxt>Calendar</UserNavTxt>
          </UserNavLink>
        </UserNavItem>
        <UserNavItem>
          <UserNavLink to="statistics">
            <AddSvg component={Vector} sprite={SVG} spriteId="chart-icon" />
            <UserNavTxt>Statistics</UserNavTxt>
          </UserNavLink>
        </UserNavItem>
      </UserNavList>
    </UserNavWrapper>
  );
};

export default UserNav;
