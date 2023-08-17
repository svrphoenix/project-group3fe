import * as SC from './MainPage.styled';
import { Review } from 'components/Reviews/Review';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { SVG } from 'images';
import api from 'api/api';
import { toast } from 'react-hot-toast';

const getAllReviews = async () => {
  try {
    const data = await api('/reviews');
    return data;
  } catch (error) {
    toast.error('Oops something went wrong!!!.');
    console.log(error);
  }
};

export const ReviewsSlider = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    (async function () {
      const { data } = await getAllReviews();
      setReviews(data);
    })();
  }, []);

  const swiperRef = useRef(null);
  const sliderSettings = {
    1439: {
      slidesPerView: 2,
    },
  };
  if (!reviews.length) return;

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
          {reviews.map(({ owner: { name, avatarURL }, rating, comment }) => (
            <SwiperSlide
              key={name}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Review
                avatar={avatarURL}
                rating={rating}
                name={name}
                review={comment}
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
