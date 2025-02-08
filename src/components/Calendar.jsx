import React from 'react';

const Calendar = () => {
    return (
        <div>
            <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ07jJdc12qhsQP4_zc_9Uhrzfh_IqwOVkaxiuaglmJTOtN150OKN2n_m9vFjk-uzwrrpXo8zxNQ?gv=true"
                style={{ border: 0, }}
                width="100%"
                height="600"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default Calendar;
