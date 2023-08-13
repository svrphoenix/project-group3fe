import SVG from './header-img/header-icons.svg';
import { Button, Vector } from './ThemeToggleBtn.styled';
import AddSvg from 'components/AddSvg/AddSvg';

const ThemeToggleBtn = () => {
  return (
    <Button type="button" aria-label="Switch color theme">
      <AddSvg component={Vector} sprite={SVG} spriteId="moon-icon" />
    </Button>
  );
};

export default ThemeToggleBtn;
