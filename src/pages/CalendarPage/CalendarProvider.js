import React, { createContext, useContext, useState } from 'react';

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <CalendarContext.Provider value={{ currentDate, setCurrentDate }}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => useContext(CalendarContext);
