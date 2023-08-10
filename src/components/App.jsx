import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import MainLayout from 'pages/MainLayout/MainLayout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import useAuth from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { refreshCurrentUser } from 'redux/auth/operations';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));
const AccountPage = lazy(() => import('../pages/AccountPage/AccountPage'));
const StatisticsPage = lazy(() =>
  import('../pages/StatisticsPage/StatisticsPage')
);
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const App = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>LOADING....</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute
              redirectTo="/calendar"
              component={isLoggedIn ? <MainLayout /> : <MainPage />}
            />
          }
        />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/calendar"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/calendar" component={<LoginPage />} />
          }
        />
        <Route
          path="/calendar"
          element={
            <PrivateRoute redirectTo="/login" component={<CalendarPage />} />
          }
        >
          <Route
            path="month/:currentDate"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<div>ChoosedMonth</div>}
              />
            }
          />
        </Route>
        <Route
          path="/account"
          element={
            <PrivateRoute redirectTo="/login" component={<AccountPage />} />
          }
        />
        <Route
          path="/statistics"
          element={
            <PrivateRoute redirectTo="/login" component={<StatisticsPage />} />
          }
        />
        <Route
          path="*"
          element={<RestrictedRoute redirectTo="/" component={<NotFound />} />}
        />
      </Routes>
    </Suspense>
  );
};

export default App;
