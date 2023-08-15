import { AuthSection } from 'components/MainPage/AuthSection';
import { Description } from 'components/MainPage/Description';
import { ReviewsSlider } from 'components/MainPage/ReviewsSlider';

const MainPage = () => {
  return (
    <main>
      <AuthSection />
      <Description />
      <ReviewsSlider />
    </main>
  );
};

export default MainPage;
