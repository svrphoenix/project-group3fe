import { eachDayOfInterval, endOfWeek, format, startOfWeek } from 'date-fns';
import * as SC from './MonthCalendarHead.styled';
import useResize from 'hooks/useResize';

const MonthCalendarHead = () => {
  const currentDate = new Date();
  const width = useResize();
  const startDayOfWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endDayOfWeek = endOfWeek(currentDate, { weekStartsOn: 1 });
  const daysOfWeek = eachDayOfInterval({
    start: startDayOfWeek,
    end: endDayOfWeek,
  });

  return (
    <SC.DaysOfWeekWrapper>
      {daysOfWeek.map(day => (
        <SC.Day key={day}>
          {width > 768 ? format(day, 'EEE') : format(day, 'EEEEE')}
        </SC.Day>
      ))}
    </SC.DaysOfWeekWrapper>
  );
};

export default MonthCalendarHead;
