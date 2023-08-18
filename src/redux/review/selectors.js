const selectUserReview = state => state.review.user;
const selectError = state => state.review.error;
const selectIsLoading = state => state.review.isLoading;

export { selectIsLoading, selectUserReview, selectError };
