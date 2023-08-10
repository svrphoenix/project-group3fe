import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import useAuth from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { refreshCurrentUser } from 'redux/auth/operations';

const MainLayout = lazy(() => import('../pages/MainLayout/MainLayout'));
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
  const { isLoggedIn, isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  const isLoginLayout = (
    <Route
      path="/"
      element={
        <MainLayout />
        // <RestrictedRoute redirectTo="/calendar" component={<MainLayout />} />
      }
    >
      <Route
        path="/calendar"
        element={<PrivateRoute redirectTo="/" component={<CalendarPage />} />}
      >
        <Route
          path="month/:currentDate"
          element={
            <PrivateRoute redirectTo="/" component={<div>ChoosedMonth</div>} />
          }
        />
      </Route>
      <Route
        path="/account"
        element={<PrivateRoute redirectTo="/" component={<AccountPage />} />}
      />
      <Route
        path="/statistics"
        element={<PrivateRoute redirectTo="/" component={<StatisticsPage />} />}
      />
      <Route
        path="*"
        element={<RestrictedRoute redirectTo="/" component={<NotFound />} />}
      />
    </Route>
  );

  const notAuthorizedLayout = (
    <>
      <Route path="/" element={<MainPage />} />
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
        element={<PrivateRoute redirectTo="/" component={<CalendarPage />} />}
      >
        <Route
          path="month/:currentDate"
          element={
            <PrivateRoute redirectTo="/" component={<div>ChoosedMonth</div>} />
          }
        />
      </Route>
      <Route
        path="/account"
        element={<PrivateRoute redirectTo="/" component={<AccountPage />} />}
      />
      <Route
        path="/statistics"
        element={<PrivateRoute redirectTo="/" component={<StatisticsPage />} />}
      />
      <Route
        path="*"
        element={<RestrictedRoute redirectTo="/" component={<NotFound />} />}
      />
    </>
  );

  return (
    <Suspense fallback={<div>LOADING....</div>}>
      {isRefreshing ? (
        <div>Loader</div>
      ) : (
        <Routes>{isLoggedIn ? isLoginLayout : notAuthorizedLayout}</Routes>
      )}
    </Suspense>
  );
};

export default App;
