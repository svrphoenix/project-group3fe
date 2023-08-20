import { useEffect, useState } from 'react';
import { Button, Vector } from './ThemeToggleBtn.styled';
import AddSvg from 'components/AddSvg/AddSvg';
import getSvg from '../../utils/getSvg';

const SVG = getSvg();

const ThemeToggleBtn = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toogleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button type="button" aria-label="Switch color theme" onClick={toogleTheme}>
      {theme === 'light' ? (
        <AddSvg component={Vector} sprite={SVG} spriteId="icon-moon" />
      ) : (
        <AddSvg component={Vector} sprite={SVG} spriteId="icon-sun" />
      )}
    </Button>
  );
};

export default ThemeToggleBtn;
