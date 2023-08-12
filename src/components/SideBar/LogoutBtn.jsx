import SVG from './sidebar-and-header-images/sidebar-nav-icons.svg';
import { Btn, Txt, Vector } from './LogoutBtn.styled';

const LogOutIcon = ({ sprite, spriteId }) => {
  return (
    <Vector>
      <use href={`${sprite}#${spriteId}`} />
    </Vector>
  );
};

const LogoutBtn = () => {
  return (
    <Btn type="submit">
      <Txt>Log out </Txt>
      <LogOutIcon sprite={SVG} spriteId="logout-icon" />
    </Btn>
  );
};

export default LogoutBtn;
