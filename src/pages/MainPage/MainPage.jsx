import { AuthSection } from 'components/MainPage/AuthSection';
import { Description } from 'components/MainPage/Description';
import { ReviewsSlider } from 'components/MainPage/ReviewsSlider';
// import PropTypes from 'prop-types';

const MainPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />
    </>
  );
};

// MainPage.propTypes = {};

export default MainPage;
