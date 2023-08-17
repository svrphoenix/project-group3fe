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

const UserNav = ({ closeSideBar }) => {
  const navListConfig = [
    { linkTo: 'account', iconId: 'user-icon', linkName: 'My account' },
    { linkTo: 'calendar', iconId: 'calendar-icon', linkName: 'Calendar' },
    { linkTo: 'statistics', iconId: 'chart-icon', linkName: 'Statistics' },
  ];

  return (
    <UserNavWrapper>
      <UserNavHeading>User Panel</UserNavHeading>
      <UserNavList>
        {navListConfig.map(({ linkTo, iconId, linkName }) => (
          <UserNavItem key={`${linkTo}`}>
            <UserNavLink to={`${linkTo}`} onClick={closeSideBar}>
              <AddSvg component={Vector} sprite={SVG} spriteId={`${iconId}`} />
              <UserNavTxt>{linkName}</UserNavTxt>
            </UserNavLink>
          </UserNavItem>
        ))}
      </UserNavList>
    </UserNavWrapper>
  );
};

export default UserNav;
