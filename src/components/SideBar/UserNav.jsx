import {
  UserNavWrapper,
  UserNavHeading,
  UserNavList,
  UserNavItem,
  UserNavLink,
  Vector,
  UserNavTxt,
} from './UserNav.styled';
import AddSvg from 'components/AddSvg/AddSvg';
import getSvg from '../../utils/getSvg';
import { useTranslation } from 'react-i18next';

const UserNav = ({ closeSideBar }) => {
  const SVG = getSvg();
  const { t } = useTranslation();

  const myAccount = `${t('SideBar.myAccount')}`;
  const calendar = `${t('SideBar.calendar')}`;
  const statistics = `${t('SideBar.statistics')}`;

  const navListConfig = [
    { linkTo: 'account', iconId: 'user-icon', linkName: myAccount },
    { linkTo: 'calendar', iconId: 'calendar-icon', linkName: calendar },
    { linkTo: 'statistics', iconId: 'chart-icon', linkName: statistics },
  ];

  return (
    <UserNavWrapper>
      <UserNavHeading>{t('SideBar.UserPanel')}</UserNavHeading>
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
