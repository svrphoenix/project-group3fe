import Ratings from 'react-ratings-declarative';
import { useState } from 'react';
import { ReactComponent as Star } from 'images/icons/star.svg';

export const StarRate = () => {
  const [rate, setRate] = useState(2);

  const changeRating = newRating => {
    setRate(newRating);
  };
  const isSelectable = true;
  const style = {
    margin: 20,
  };

  return (
    <Ratings
      style={style}
      rating={rate}
      changeRating={isSelectable ? changeRating : false}
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
