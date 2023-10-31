import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CalendarComponent from './components/Calendar';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import UserLogin from './components/UserLogin';

function App() {
  return (
    <Router>
      {/* Common Layout Components such as Header, Footer, etc can go here */}

      <Routes>
        <Route path="/" element={<CalendarComponent />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/login" element={<UserLogin />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
