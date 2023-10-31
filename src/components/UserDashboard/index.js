import React from 'react';
import CalendarComponent from '../Calendar';

function UserDashboard() {
  const handleDateSelect = (date) => {
    // handle date selection for scheduling tour
  };

  return (
    <div>
      <CalendarComponent onSelect={handleDateSelect} />
      {/* Other components like the form for tour details */}
    </div>
  );
}

export default UserDashboard;
