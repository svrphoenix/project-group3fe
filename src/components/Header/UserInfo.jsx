import { UserInfoWrapper, UserName, UserAvatar } from './UserInfo.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const UserInfo = () => {
  const user = useSelector(selectUser);

  return (
    <UserInfoWrapper>
      <UserName>{user.name}</UserName>
      {!user.avatarURL && <UserAvatar>{user.name.slice(0, 1)}</UserAvatar>}
      {/* <UserAvatar>{user.name.slice(0, 1)}</UserAvatar> */}
    </UserInfoWrapper>
  );
};

export default UserInfo;
