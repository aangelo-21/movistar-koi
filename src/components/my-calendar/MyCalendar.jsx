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
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '63vh',
      paddingTop: '5rem',
      paddingBottom: '5rem',
      width: '100%',
      margin: 0
    }}>
      <div style={{
        height: '60vh',
        width: '50vw',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 0.25rem 1.25rem rgba(0,0,0,0.15)',
        overflow: 'hidden',
        margin: 0
      }}>
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
