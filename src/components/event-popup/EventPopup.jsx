import "./EventPopup.css"
import moment from 'moment'

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

export default EventPopup