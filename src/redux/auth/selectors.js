const selectIsLoggedIn = ({ auth }) =>
  Boolean(auth.user && auth.token && auth.refreshToken);
const selectUser = ({ auth }) => auth.user;
const selectIsLoading = ({ auth }) => auth.isLoading;
const selectTokens = ({ auth }) => ({
  token: auth.token,
  refreshToken: auth.refreshToken,
});
const selectError = ({ auth }) => auth.error;

export {
  selectIsLoggedIn,
  selectIsLoading,
  selectUser,
  selectTokens,
  selectError,
};
