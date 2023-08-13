import Ratings from 'react-ratings-declarative';
import { ReactComponent as Star } from 'images/icons/star.svg';

export const StarRate = ({ isSelectable, rate, setRate }) => {
  const changeRating = newRating => {
    setRate(newRating);
  };

  return (
    <Ratings
      rating={rate}
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
