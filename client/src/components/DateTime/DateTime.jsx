import React, { useState } from 'react';
import './DateTime.css';

function DateTime() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dateTime = `${date} ${time}`;
    alert(`Selected Date and Time: ${dateTime}`);
  };

  return (
    <form onSubmit={handleSubmit} className="date-time-picker">
      <div>
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <label htmlFor="time">Select Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={handleTimeChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DateTime;