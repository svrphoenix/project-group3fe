import { Routes, Route, Navigate } from 'react-router-dom';
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
import { Toaster } from 'react-hot-toast';
import { format } from 'date-fns';

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

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/calendar"
                component={<MainPage />}
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
              <RestrictedRoute
                redirectTo="/calendar"
                component={<LoginPage />}
              />
            }
          />
          <Route element={<PrivateRoute component={<MainLayout />} />}>
            <Route
              path="/calendar"
              element={
                <PrivateRoute redirectTo="/" component={<CalendarPage />} />
              }
            >
              <Route
                index
                element={
                  <Navigate
                    to={`month/${format(new Date(), 'yyyy-MM')}`}
                    replace
                  />
                }
              />
              <Route
                path="month/:currentDate"
                element={
                  <PrivateRoute redirectTo="/" component={<ChoosedMonth />} />
                }
              />
              <Route
                path="day/:currentDay"
                element={
                  <PrivateRoute redirectTo="/" component={<ChoosedDay />} />
                }
              />
            </Route>
            <Route
              path="/account"
              element={
                <PrivateRoute redirectTo="/" component={<AccountPage />} />
              }
            />

            <Route
              path="/statistics"
              element={
                <>
                  <Navigate
                    to={`?month=${
                      new Date().getMonth() + 1
                    }&day=${new Date().getDate()}&year=${new Date().getFullYear()}`}
                    replace
                  />
                  <StatisticsPage />
                </>
              }
            />
          </Route>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: 'orange',
            overflow: 'hidden',
          },
          icon: '❗',
          iconTheme: {
            primary: '#fff',
            secondary: 'orange',
          },
        }}
      />
    </>
  );
};

export default App;
