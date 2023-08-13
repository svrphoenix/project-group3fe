import SVG from './header-img/header-icons.svg';
import { Button, Vector } from './ThemeToggleBtn.styled';

const ThemeToggleIcon = ({ sprite, spriteId }) => {
  return (
    <Vector>
      <use href={`${sprite}#${spriteId}`} />
    </Vector>
  );
};

const ThemeToggleBtn = () => {
  return (
    <Button type="button" aria-label="Switch color theme">
      <ThemeToggleIcon sprite={SVG} spriteId="moon-icon" />
    </Button>
  );
};

export default ThemeToggleBtn;
