import React from 'react';


const DateForm = () => {
    return (
        <div>
            <form className="date-time">
                <label>
                    Calendar
                    <input type="date" name="date" />
                </label>
                <label>
                    Time
                    <input type="time" name="time" />
                </label>
                <label>
                    Date & Time
                    <input type="datetime-local" name="datetime-local"/>
                </label>
                <label>
                    Month
                    <input type="month" name="month" />
                </label>
                <label>
                    Week
                    <input type="week" name="week" />
                </label>
            </form>
        </div>
    );
};

export default DateForm;