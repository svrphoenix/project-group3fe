const selectIsLoggedIn = state => Boolean(state.auth.user && state.auth.token);
const selectUser = state => state.auth.user;
const selectIsLoading = state => state.auth.isLoading;
const selectToken = state => state.auth.token;
const selectRefreshToken = state => state.auth.refreshToken;

export {
  selectIsLoggedIn,
  selectIsLoading,
  selectUser,
  selectToken,
  selectRefreshToken,
};
