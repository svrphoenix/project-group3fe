import { eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns';
import MonthCalendarHead from 'components/ChoosedMonth/MonthCalendarHead/MonthCalendarHead';
import CalendarTable from 'components/ChoosedMonth/CalendarTable/CalendarTable';
import useResize from 'hooks/useResize';

export const ChoosedMonth = () => {
  const currentDate = new Date();
  const width = useResize();

  const startDayOfWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endDayOfWeek = endOfWeek(currentDate, { weekStartsOn: 1 });
  const daysOfWeek = eachDayOfInterval({
    start: startDayOfWeek,
    end: endDayOfWeek,
  });

  return (
    <>
      <MonthCalendarHead
        currentDate={currentDate}
        width={width}
        daysOfWeek={daysOfWeek}
      />
      <CalendarTable />
    </>
  );
};
