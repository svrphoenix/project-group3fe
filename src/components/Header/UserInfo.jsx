import {
  UserInfoWrapper,
  UserName,
  UserAvatar,
  UserAvatarImg,
} from './UserInfo.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const UserInfo = () => {
  const user = useSelector(selectUser);

  return (
    <UserInfoWrapper>
      <UserName>{user.name}</UserName>

      {user.avatarURL ? (
        <UserAvatarImg src={`${user.avatarURL}`} alt="User" />
      ) : (
        <UserAvatar>{user.name.slice(0, 1)}</UserAvatar>
      )}
    </UserInfoWrapper>
  );
};

export default UserInfo;
