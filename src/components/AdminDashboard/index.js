// src/components/AdminDashboard/index.js
import React from 'react';

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <section>
        <h2>Advanced Users' Schedules</h2>
        {/* Display the schedules of all advanced users here. This could be a table or a list */}
      </section>

      <section>
        <h2>Assign Tours</h2>
        <form>
          {/* A dropdown or list to select a basic user's tour */}
          <label>
            Select Tour:
            {/* Mock Dropdown */}
            <select>
              <option value="tour1">Tour 1</option>
              <option value="tour2">Tour 2</option>
            </select>
          </label>

          {/* A dropdown or list to select an advanced user */}
          <label>
            Assign to Advanced User:
            {/* Mock Dropdown */}
            <select>
              <option value="user1">Advanced User 1</option>
              <option value="user2">Advanced User 2</option>
            </select>
          </label>

          <button type="submit">Assign</button>
        </form>
      </section>
    </div>
  );
}

export default AdminDashboard;
