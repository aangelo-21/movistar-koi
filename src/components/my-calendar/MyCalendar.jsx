import "./MyCalendar.css"
import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { eventsData } from '../../services/eventsData'

moment.locale('es')
const localizer = momentLocalizer(moment)

function EventPopup({ event, onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '5%',
      borderRadius: '8px',
      boxShadow: '0 0.25rem 1.25rem rgba(0,0,0,0.15)',
      zIndex: 1000,
      maxWidth: '90%',
      width: '25rem',
      maxHeight: '90vh',
      overflowY: 'auto'
    }}>
      <button 
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '0.625rem',
          right: '0.625rem',
          background: 'none',
          border: 'none',
          fontSize: '1.25rem',
          cursor: 'pointer'
        }}
      >
        ×
      </button>
      <h2 style={{ marginTop: '0', fontSize: '1.5rem' }}>{event.title}</h2>
      <p><strong>Inicio:</strong> {moment(event.start).format('LLLL')}</p>
      <p><strong>Fin:</strong> {moment(event.end).format('LLLL')}</p>
      <p><strong>Descripción:</strong> {event.description}</p>
      <p><strong>Ubicación:</strong> {event.location}</p>
    </div>
  );
}

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
