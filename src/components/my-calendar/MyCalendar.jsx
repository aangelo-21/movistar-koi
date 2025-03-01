import "./MyCalendar.css"
import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { eventsData } from '../../services/eventsData'
import EventPopup from "../event-popup/EventPopup"

moment.locale('es')
const localizer = momentLocalizer(moment)

function MyCalendar() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const closePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-wrapper">
        <Calendar
          localizer={localizer}
          events={eventsData}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%' }}
          views={['month']}
          toolbar={false}
          components={{
            toolbar: () => null,
          }}
          onSelectEvent={handleSelectEvent}
        />
      </div>
      {selectedEvent && <EventPopup event={selectedEvent} onClose={closePopup} />}
    </div>
  );
}

export default MyCalendar;
