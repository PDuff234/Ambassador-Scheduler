import React, { useState } from 'react';
import Calendar from 'react-calendar';
//import fetch from 'node-fetch'; 
import 'react-calendar/dist/Calendar.css';
import './calendarStyles.css';

function CalendarComponent() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        major: ''
    });

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setIsFormVisible(true);
    };

    // Function to determine if a tile should be disabled
    const isWeekend = ({ date }) => {
        const day = date.getDay(); 
        return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
    };

    const formatWeekdayName = (locale, date) => {
        const weekdayNames = [
          'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'
        ];
        return weekdayNames[date.getDay()];
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Send a POST request with the form data
        fetch({
        method: 'POST',
        headers: {
            'Authorization': process.env.XATA_API_KEY, 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
        console.log('Data saved:', data);
        setIsFormVisible(false); // close the form popup
        })
        .catch(error => {
        console.error('Error sending data:', error);
        });

        // Here, you can handle the form submission, e.g., send the data to a server.
        setIsFormVisible(false);
    };

    return (
        <div className="calendar-container">
        <Calendar 
            onClickDay={handleDateSelect} 
            tileDisabled={isWeekend}
            formatShortWeekday={(locale, date) => formatWeekdayName(locale, date)}
            locale='en-US'
        />

        {isFormVisible && (
            <div className="form-popup">
            <h3>Schedule a tour for {selectedDate.toLocaleDateString()}</h3>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Full Name:</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>Intended Major:</label>
                <input
                    type="text"
                    name="major"
                    value={formData.major}
                    onChange={handleInputChange}
                />
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
        )}
        </div>
    );
}

export default CalendarComponent;
