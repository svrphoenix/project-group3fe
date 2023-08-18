import { useEffect, useState } from 'react';
import { eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns';
import { MonthCalendarHead } from 'components/ChoosedMonth/MonthCalendarHead/MonthCalendarHead';
import { CalendarTable } from 'components/ChoosedMonth/CalendarTable/CalendarTable';

export const ChoosedMonth = () => {
  const currentDate = new Date();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

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
      <CalendarTable currentDate={currentDate} />
    </>
  );
};
