import Ratings from 'react-ratings-declarative';
import { ReactComponent as Star } from 'images/icons/star.svg';

export const StarRating = ({ isSelectable, rating, setRating }) => {
  const changeRating = newRating => {
    setRating(newRating);
  };

  return (
    <Ratings
      rating={rating}
      {...(isSelectable && { changeRating })}
      widgetDimensions="24px"
      widgetSpacings="0"
    >
      <Ratings.Widget widgetRatedColor="#FFAC33" svgs=<Star /> />
      <Ratings.Widget widgetRatedColor="#FFAC33" svgs=<Star /> />
      <Ratings.Widget widgetRatedColor="#FFAC33" svgs=<Star /> />
      <Ratings.Widget widgetRatedColor="#FFAC33" svgs=<Star /> />
      <Ratings.Widget widgetRatedColor="#FFAC33" svgs=<Star /> />
    </Ratings>
  );
};
