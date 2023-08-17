import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { refreshCurrentUser } from 'redux/auth/operations';
import { SharedLayout } from './SharedLayout';
// import useAuth from 'hooks/useAuth';
// import { Loader } from './Loader/Loader';
import { ChoosedMonth } from './ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from './ChoosedDay/ChoosedDay';

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
  const dispatch = useDispatch();

  // const { isLoading } = useAuth();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  // return
  // isLoading ? (
  //   <Loader />
  // ) :
    return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <RestrictedRoute redirectTo="/calendar" component={<MainPage />} />
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

        <Route element={<MainLayout />}>
          <Route
            path="/calendar"
            element={
              <PrivateRoute redirectTo="/" component={<CalendarPage />} />
            }
          />
          <Route
            path="/calendar/month/:currentDate"
            element={
              <PrivateRoute redirectTo="/" component={<ChoosedMonth />} />
            }
          />
          <Route
            path="/calendar/day/:currentDay"
            element={<PrivateRoute redirectTo="/" component={<ChoosedDay />} />}
          />
          <Route
            path="/account"
            element={
              <PrivateRoute redirectTo="/" component={<AccountPage />} />
            }
          />
          <Route
            path="/statistics"
            element={
              <PrivateRoute redirectTo="/" component={<StatisticsPage />} />
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
