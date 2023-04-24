import React, { useState } from 'react';
import BookList from './BookList';
import Bookform from './Bookform'; // Update import statement to match filename

const App = () => {
  const [bookings, setBookings] = useState([]); // State to store bookings data

  const handleBookingSubmit = (formData) => {
    // Callback function to handle form submissions
    // Add logic to send formData to API or update bookings data
    // For example:
    const newBooking = { id: bookings.length + 1, ...formData };
    setBookings([...bookings, newBooking]);
  };

  return (
    <div>
      <h1>Booking App</h1>
      <BookList bookings={bookings} /> {/* Render BookingList component with bookings data */}
      <Bookform onSubmit={handleBookingSubmit} /> {/* Render BookingForm component with onSubmit callback */}
    </div>
  );
};

export default App;
