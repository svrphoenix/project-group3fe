// import PropTypes from 'prop-types';

import { CalendarToolbar } from 'components/Calendar/CalendarToolbar/CalendarToolbar';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const CalendarPage = () => {
  const navigate = useNavigate();
  // const [today, setToday] = useState(new Date());
  const formatedCurrentDay = format(new Date(), 'MMMM').toLowerCase();

  useEffect(() => {
    navigate(`month/${formatedCurrentDay}`);
  }, [navigate, formatedCurrentDay]);

  return (
    <>
      <CalendarToolbar />
    </>
  );
};

// CalendarPage.propTypes = {};

export default CalendarPage;