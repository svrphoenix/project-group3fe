import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectUserReview } from 'redux/review/selectors';
import * as reviewOperations from 'redux/review/operations';
import { useState } from 'react';
import { ReactComponent as CloseIcon } from 'images/icons/x-close.svg';
import { ReactComponent as Pencil } from 'images/icons/pencil-01.svg';
import { ReactComponent as Trash } from 'images/icons/trash-2.svg';
import { StarRating } from './StarRating';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as SC from './FeedbackForm.styled';

export const FeedbackForm = ({ close }) => {
  const currentUser = useSelector(selectUserReview);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const [readOnly, setReadOnly] = useState(!!currentUser.comment);

  const checkErrorForCloseModal = ({ meta }) => {
    if (meta.requestStatus === 'fulfilled') {
      close();
    }
  };

  const onSubmitFeedback = values => {
    const credentials = {
      comment: values.comment,
      rating: values.rating,
    };

    if (!currentUser.comment) {
      dispatch(reviewOperations.postReview(credentials)).then(
        checkErrorForCloseModal
      );
    } else {
      dispatch(reviewOperations.updateReview(credentials)).then(
        checkErrorForCloseModal
      );
    }
  };

  const onDeleteReview = () => {
    dispatch(reviewOperations.deleteReview()).then(checkErrorForCloseModal);
  };

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  const FeedbackSchema = Yup.object().shape({
    comment: Yup.string()
      .min(10, 'Too short message!')
      .max(300, 'Too long message!')
      .required("You haven't written anything"),
    rating: Yup.number().min(1).max(5).required(),
  });

  const initialValues = {
    comment: currentUser.comment,
    rating: currentUser.rating,
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
        onSubmit={onSubmitFeedback}
        validateOnChange={false}
      >
        {({ values, setFieldValue }) => {
          return !error ? (
            <SC.FeedbackForm>
              <SC.CloseBtn
                type="button"
                onClick={close}
                aria-label="Close modal"
              >
                <CloseIcon />
              </SC.CloseBtn>
              <SC.Label>
                Raiting
                <StarRating
                  name="rating"
                  isSelectable={!readOnly}
                  rating={values.rating}
                  setRating={setFieldValue}
                />
              </SC.Label>
              <SC.Label htmlFor="reviewTextAreaId">
                {currentUser.comment && (
                  <SC.EditBtnWrapper>
                    <SC.EditBtn
                      type="button"
                      style={{
                        backgroundColor: readOnly ? '#e5edfa' : '#3e85f3',
                      }}
                      onClick={() => setReadOnly(false)}
                      aria-label="Edit review"
                    >
                      <Pencil stroke={readOnly ? '#3e85f3' : 'white'} />
                    </SC.EditBtn>
                    <SC.DeleteBtn
                      type="button"
                      onClick={onDeleteReview}
                      aria-label="Delete review"
                    >
                      <Trash />
                    </SC.DeleteBtn>
                  </SC.EditBtnWrapper>
                )}
                Review
                <Field
                  id="reviewTextAreaId"
                  name="comment"
                  as={SC.Textarea}
                  rows={6}
                  cols={40}
                  placeholder="Enter text"
                  maxLength={300}
                  readOnly={readOnly}
                />
                <SC.ErrorBox>
                  <SC.ErrorWrapper>
                    <ErrorMessage name="comment" />
                  </SC.ErrorWrapper>
                  <SC.ErrorWrapper>
                    <ErrorMessage name="rating" />
                  </SC.ErrorWrapper>
                </SC.ErrorBox>
              </SC.Label>
              {!readOnly && (
                <SC.ReviewBtnWrapper>
                  {!currentUser.comment ? (
                    <SC.MainReviewBtn type="submit">Save</SC.MainReviewBtn>
                  ) : (
                    <SC.MainReviewBtn type="submit">Edit</SC.MainReviewBtn>
                  )}
                  <SC.CancelReviewBtn type="button" onClick={close}>
                    Cancel
                  </SC.CancelReviewBtn>
                </SC.ReviewBtnWrapper>
              )}
            </SC.FeedbackForm>
          ) : (
            <SC.ErrorBox>
              <h1>Something was wrong</h1>
              <SC.MainReviewBtn type="submit" onClick={reloadPage}>
                Reload
              </SC.MainReviewBtn>
            </SC.ErrorBox>
          );
        }}
      </Formik>
    </>
  );
};