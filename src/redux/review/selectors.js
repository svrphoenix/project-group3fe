const selectUser = state => state.review.user;
const selectError = state => state.review.error;
const selectIsLoading = state => state.review.isLoading;

export { selectIsLoading, selectUser, selectError };
