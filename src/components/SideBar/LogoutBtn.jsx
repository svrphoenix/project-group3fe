import { Btn, Txt, Vector } from './LogoutBtn.styled';
import { logout } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import AddSvg from 'components/AddSvg/AddSvg';
import getSvg from '../../utils/getSvg';
import { useNavigate } from 'react-router-dom';

const SVG = getSvg();

const LogoutBtn = ({ closeSideBar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    closeSideBar();
    dispatch(logout());
    navigate('/');
  }

  return (
    <Btn type="button" onClick={handleClick}>
      <Txt>Log out </Txt>
      <AddSvg component={Vector} sprite={SVG} spriteId="logout-icon" />
    </Btn>
  );
};

export default LogoutBtn;
