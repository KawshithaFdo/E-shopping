import React, { useState } from 'react';
import Modal from 'react-modal';
import './PaymentModal.css';

Modal.setAppElement('#root');

const PaymentDetailsModal = ({ isOpen, onClose, onPayNow }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cvc, setCvc] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleCloseModal = () => {
    onClose();
  };

  const handlePayNowClick = () => {
    if (cardNumber && cardHolderName && cvc && expiryDate) {
      const paymentData = {
        cardNumber,
        cardHolderName,
        cvc,
        expiryDate,
      };
      onPayNow(paymentData);
      handleCloseModal();
    } else {
      // Handle invalid form data or display an error message
      console.log('Please fill in all card details');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className="payment-modal-content"
      overlayClassName="payment-modal-overlay"
    >
      <h2>Payment Details</h2>
      <form>
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Cardholder's Name</label>
          <input
            type="text"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>CVC</label>
          <input
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>
        <button type="button" onClick={handlePayNowClick}>
          Pay Now
        </button>
        <button type="button" onClick={handleCloseModal}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default PaymentDetailsModal;
