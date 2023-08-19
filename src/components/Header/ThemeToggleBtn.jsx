import { useEffect, useState } from 'react';
import SVG from './header-img/header-icons.svg';
import { Button, Vector } from './ThemeToggleBtn.styled';
import AddSvg from 'components/AddSvg/AddSvg';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

const ThemeToggleBtn = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || defaultTheme
  );

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toogleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button type="button" aria-label="Switch color theme" onClick={toogleTheme}>
      {theme === 'light' ? (
        <AddSvg component={Vector} sprite={SVG} spriteId="moon-icon" />
      ) : (
        <AddSvg component={Vector} sprite={SVG} spriteId="sun-icon" />
      )}
    </Button>
  );
};

export default ThemeToggleBtn;