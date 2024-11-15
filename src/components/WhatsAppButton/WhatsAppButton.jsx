// src/components/WhatsAppButton/WhatsAppButton.js
import React from 'react';
import './WhatsAppButton.css';

// Asegúrate de tener FontAwesome o el ícono SVG correcto
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const phoneNumber = '+1164838386'; // Reemplázalo con tu número de WhatsApp
  const message = '¡Hola! Me gustaría saber más sobre tu producto.'; // Mensaje predefinido

  // URL para abrir WhatsApp web con un mensaje predefinido
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;




