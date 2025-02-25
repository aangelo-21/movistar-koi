import React, { useState } from 'react';
import './FooterContent.css';

function FooterContent() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="footer-content">
        <b className="footer-content-item">#SomosMovistarKOI</b>
        <div className="footer-content-item">
          <b className="footer-content-subitem">Teléfono: 913184670</b>
          <b className="footer-content-subitem">Ubicación: <a href="https://maps.app.goo.gl/ZxVTzjgEaZ3YvNP4A">P.º de la Chopera, 14, Arganzuela, 28045 Madrid</a></b>
        </div>
        <b onClick={togglePopup} style={{ cursor: 'pointer' }}>Terminos y condiciones</b>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={togglePopup}>&times;</span>
            <h2>Términos y Condiciones</h2>
            <p>1. Estos son los términos y condiciones genéricos.</p>
            <p>2. Al usar nuestro servicio, usted acepta estos términos.</p>
            <p>3. Nos reservamos el derecho de modificar estos términos en cualquier momento.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default FooterContent;
