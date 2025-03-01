import "./EventPopup.css"
import moment from 'moment'

function EventPopup({ event, onClose }) {
  return (
    <div className="popup-container">
      <button 
        onClick={onClose}
        className="close-button"
      >
        ×
      </button>
      <h2 className="popup-title">{event.title}</h2>
      <p><strong>Inicio:</strong> {moment(event.start).format('LLLL')}</p>
      <p><strong>Fin:</strong> {moment(event.end).format('LLLL')}</p>
      <p><strong>Descripción:</strong> {event.description}</p>
      <p><strong>Ubicación:</strong> {event.location}</p>
    </div>
  );
}

export default EventPopup