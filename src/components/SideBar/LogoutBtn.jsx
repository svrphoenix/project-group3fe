import LogOutIcon from './sidebar-and-header-images/log-out-icon.svg';
import { Btn, Txt, Img } from './LogoutBtn.styled';

const LogoutBtn = () => {
  return (
    <Btn type="submit">
      <Txt>Log out </Txt>
      <Img src={`${LogOutIcon}`} alt="Logout" width="20" />
    </Btn>
  );
};

export default LogoutBtn;
