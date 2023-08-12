import SVG from './sidebar-and-header-images/sidebar-nav-icons.svg';
import { Btn, Txt, Vector } from './LogoutBtn.styled';
import { logout } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

const LogOutIcon = ({ sprite, spriteId }) => {
  return (
    <Vector>
      <use href={`${sprite}#${spriteId}`} />
    </Vector>
  );
};

const LogoutBtn = () => {
  const dispatch = useDispatch();

  return (
    <Btn type="submit" onClick={() => dispatch(logout())}>
      <Txt>Log out </Txt>
      <LogOutIcon sprite={SVG} spriteId="logout-icon" />
    </Btn>
  );
};

export default LogoutBtn;
