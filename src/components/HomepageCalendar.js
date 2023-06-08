import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';

function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate('/booking', { state: { selectedDate: selectedDate.toISOString() } });
  };

  return (
    <div>
      <h2>Homepage</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="datePicker">Choose a date:</label>
        <DatePicker selected={selectedDate} onChange={handleDateChange} />
        <button type="submit">Go to Booking</button>
      </form>
    </div>
  );
}

export default MyCalendar;
