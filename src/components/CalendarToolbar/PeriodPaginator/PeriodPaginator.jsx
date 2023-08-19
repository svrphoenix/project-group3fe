import { SVG } from 'images';
import * as SC from './PeriodPaginator.styled';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { parse, parseISO } from 'date-fns';

const PeriodPaginator = ({ date, prevHandler, nextHandler }) => {
  const { createdAt } = useSelector(selectUser);
  return (
    <SC.PeriodPaginatorWrapper>
      <SC.PeriodPaginatorDisplay>{date}</SC.PeriodPaginatorDisplay>
      <SC.ButtonGroup>
        <SC.Button
          disabled={parseISO(createdAt) > parse(date, 'MMMM yyyy', new Date())}
          onClick={prevHandler}
        >
          <SVG.LeftChevron />
        </SC.Button>
        <SC.Button onClick={nextHandler}>
          <SVG.RightChevron />
        </SC.Button>
      </SC.ButtonGroup>
    </SC.PeriodPaginatorWrapper>
  );
};
export default PeriodPaginator;

PeriodPaginator.propTypes = {
  date: PropTypes.string.isRequired,
  prevHandler: PropTypes.func.isRequired,
  nextHandler: PropTypes.func.isRequired,
};
