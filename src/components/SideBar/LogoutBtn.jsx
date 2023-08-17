import SVG from './sidebar-and-header-images/sidebar-nav-icons.svg';
import { Btn, Txt, Vector } from './LogoutBtn.styled';
import { logout } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import AddSvg from 'components/AddSvg/AddSvg';
import { useNavigate } from 'react-router';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Btn
      type="submit"
      onClick={() => {
        dispatch(logout());
        navigate('/');
      }}
    >
      <Txt>Log out </Txt>
      <AddSvg component={Vector} sprite={SVG} spriteId="logout-icon" />
    </Btn>
  );
};

export default LogoutBtn;
