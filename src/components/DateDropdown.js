import React from 'react';

const DateDropdown = ({ selectedDate, setSelectedDate, dateOptions }) => {
  return (
    <select
      className="dropdown"
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
    >
      {dateOptions.map((date, idx) => (
        <option key={idx} value={date}>
          {date}
        </option>
      ))}
    </select>
  );
};

export default DateDropdown;
