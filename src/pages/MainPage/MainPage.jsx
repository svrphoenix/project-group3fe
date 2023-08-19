import AuthSection from 'components/MainPage/AuthSection';
import Description from 'components/MainPage/Description';
import ReviewsSlider from 'components/MainPage/ReviewsSlider';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

const MainPage = () => {
  return (
    <main>
      <AuthSection />
      <Description />
      <ReviewsSlider />
      <ScrollToTop />
    </main>
  );
};

export default MainPage;
