import React from 'react';
import { Modal } from 'react-bootstrap';

const ImageModal = ({ show, onHide, imageSrc }) => {
  return (
    <Modal show={show} onHide={onHide} size="xl" centered contentClassName="bg-transparent border-0">
      <Modal.Body className="p-0 position-relative text-center">
        <button 
            type="button" 
            className="btn-close btn-close-white position-absolute top-0 end-0 m-3" 
            aria-label="Close" 
            onClick={onHide}
            style={{ zIndex: 10, background: 'rgba(0,0,0,0.5) url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e") center/1em auto no-repeat' }}
        ></button>
        <img 
            src={imageSrc} 
            alt="Preview" 
            className="img-fluid rounded shadow-lg" 
            style={{ maxHeight: '90vh', objectFit: 'contain' }} 
        />
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
