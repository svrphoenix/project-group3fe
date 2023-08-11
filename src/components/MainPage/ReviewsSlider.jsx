import * as SC from './MainPage.styled';
import { Review } from 'components/Reviews/Review';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { reviews } from './constant';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { SVG } from 'images';

export const ReviewsSlider = () => {
  const swiperRef = useRef(null);
  const sliderSettings = {
    1439: {
      slidesPerView: 2,
    },
  };

  return (
    <SC.SectionReview>
      <SC.Container>
        <SC.ReviewTitle>Reviews</SC.ReviewTitle>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          breakpoints={sliderSettings}
          onBeforeInit={swiper => {
            swiperRef.current = swiper;
          }}
        >
          {reviews.map(({ avatar, rating, name, review }) => (
            <SwiperSlide
              key={name}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Review
                avatar={avatar}
                rating={rating}
                name={name}
                review={review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <SC.SliderBtnWrapper>
          <SC.PrevBtn
            type="button"
            aria-label="Prev button"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <SVG.LarrIcon />
          </SC.PrevBtn>
          <SC.NextBtn
            type="button"
            aria-label="Next button"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <SVG.RarrIcon />
          </SC.NextBtn>
        </SC.SliderBtnWrapper>
      </SC.Container>
    </SC.SectionReview>
  );
};
