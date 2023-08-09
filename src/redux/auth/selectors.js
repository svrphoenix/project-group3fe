const selectIsLoggedIn = state => Boolean(state.auth.user && state.auth.token);
const selectUser = state => state.auth.user;
const selectIsLoading = state => state.auth.isLoading;

export { selectIsLoggedIn, selectIsLoading, selectUser };
