import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshCurrentUser } from 'redux/auth/operations';
import { Toaster } from 'react-hot-toast';
import Router from './Router';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

const App = () => {
  const dispatch = useDispatch();
  const theme = localStorage.getItem('theme') || defaultTheme;

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <main>
      <Router />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            color: 'var(--toast-main-color)',
            background: 'var(--toast-background-color)',
            overflow: 'hidden',
          },
        }}
      />
    </main>
  );
};

export default App;
