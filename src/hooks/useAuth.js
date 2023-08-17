import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsLoading,
  selectToken,
  selectRefreshToken,
} from 'redux/auth/selectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const refreshToken = useSelector(selectRefreshToken);

  return {
    isLoggedIn,
    isLoading,
    user,
    token,
    refreshToken,
  };
};

export default useAuth;
