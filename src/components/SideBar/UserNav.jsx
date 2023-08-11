import {
  UserNavWrapper,
  UserNavHeading,
  UserNavList,
  UserNavItem,
  UserNavLink,
  UserNavIcon,
  UserNavTxt,
} from './UserNav.styled';

const UserNav = () => {
  return (
    <UserNavWrapper>
      <UserNavHeading>User Panel</UserNavHeading>
      <UserNavList>
        <UserNavItem>
          <UserNavLink to="account">
            <UserNavIcon>
              <use href="./sidebar-and-header-images/sidebar-nav-icons.svg#user-icon"></use>
            </UserNavIcon>
            <UserNavTxt>My account</UserNavTxt>
          </UserNavLink>
        </UserNavItem>
        <UserNavItem>
          <UserNavLink to="calendar">
            <UserNavIcon>
              <use href="./sidebar-and-header-images/sidebar-nav-icons.svg#calendar-icon"></use>
            </UserNavIcon>
            <UserNavTxt>My account</UserNavTxt>
          </UserNavLink>
        </UserNavItem>
        <UserNavItem>
          <UserNavLink to="statistics">
            <UserNavIcon>
              <use href="./sidebar-and-header-images/sidebar-nav-icons.svg#chart-icon"></use>
            </UserNavIcon>
            <UserNavTxt>My account</UserNavTxt>
          </UserNavLink>
        </UserNavItem>
      </UserNavList>
    </UserNavWrapper>
  );
};

export default UserNav;
