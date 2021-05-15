import { useState, useEffect } from 'react';
import MyDate from '../../MyDate';
import { generateCalendarData } from '../helper';
import styled from 'styled-components';

import CalendarHeader from '../CalendarHeader/CalendarHeader';
import CalendarBody from '../CalendarBody/CalendarBody';
import { CalendarData } from '../types';

const Styled = {
  Calendar: styled.div`
    margin: 10px;
    padding: 20px;
    border: 1px solid black;
  `
};

const Calendar = () => {
  const [calendarData, setCalendarData] = useState<CalendarData>(() => {
    const now = new MyDate();
    return generateCalendarData(now.getFullYear(), now.getMonth());
  });
  const [viewDate, setViewDate] = useState(new MyDate());
  useEffect(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    setCalendarData(generateCalendarData(year, month));
  }, [viewDate]);

  const [selectedDate, setSelectedDate] = useState<MyDate | null>(null);

  return (
    <Styled.Calendar>
      <CalendarHeader
        viewDate={viewDate}
        setViewDate={setViewDate}
      ></CalendarHeader>
      <CalendarBody
        calendarData={calendarData}
        viewDate={viewDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></CalendarBody>
    </Styled.Calendar>
  );
};

export default Calendar;