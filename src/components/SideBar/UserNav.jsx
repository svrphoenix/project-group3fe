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

const UserNavIcon = ({ sprite, spriteId }) => {
  return (
    <Vector>
      <use href={`${sprite}#${spriteId}`} />
    </Vector>
  );
};

const UserNav = () => {
  return (
    <UserNavWrapper>
      <UserNavHeading>User Panel</UserNavHeading>
      <UserNavList>
        <UserNavItem>
          <UserNavLink to="account">
            <UserNavIcon sprite={SVG} spriteId="user-icon" />
            <UserNavTxt>My account</UserNavTxt>
          </UserNavLink>
        </UserNavItem>
        <UserNavItem>
          <UserNavLink to="calendar">
            <UserNavIcon sprite={SVG} spriteId="calendar-icon" />
            <UserNavTxt>Calendar</UserNavTxt>
          </UserNavLink>
        </UserNavItem>
        <UserNavItem>
          <UserNavLink to="statistics">
            <UserNavIcon sprite={SVG} spriteId="chart-icon" />
            <UserNavTxt>Statistics</UserNavTxt>
          </UserNavLink>
        </UserNavItem>
      </UserNavList>
    </UserNavWrapper>
  );
};

export default UserNav;
