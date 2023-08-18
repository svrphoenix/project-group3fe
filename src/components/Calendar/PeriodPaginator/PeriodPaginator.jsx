import { SVG } from 'images';
import * as SC from './PeriodPaginator.styled';
import PropTypes from 'prop-types';

export const PeriodPaginator = ({ date, prevHandler, nextHandler }) => {
  return (
    <SC.PeriodPaginatorWrapper>
      <SC.PeriodPaginatorDisplay>{date}</SC.PeriodPaginatorDisplay>
      <SC.ButtonGroup>
        <SC.Button onClick={prevHandler}>
          <SVG.LeftChevron />
        </SC.Button>
        <SC.Button onClick={nextHandler}>
          <SVG.RightChevron />
        </SC.Button>
      </SC.ButtonGroup>
    </SC.PeriodPaginatorWrapper>
  );
};

PeriodPaginator.propTypes = {
  date: PropTypes.string.isRequired,
  prevHandler: PropTypes.func.isRequired,
  nextHandler: PropTypes.func.isRequired,
};