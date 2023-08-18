import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsLoading,
  selectTokens,
  selectError,
} from 'redux/auth/selectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);
  const tokens = useSelector(selectTokens);
  const error = useSelector(selectError);

  return {
    isLoggedIn,
    isLoading,
    user,
    tokens,
    error,
  };
};

export default useAuth;
