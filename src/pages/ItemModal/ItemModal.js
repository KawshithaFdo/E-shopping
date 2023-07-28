import React from "react";
import Modal from "react-modal";
import "./ItemModal.css";

const ItemModal = ({ isOpen, onRequestClose, item }) => {
  const handleAddToCart = (data) => {
    onRequestClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="item-modal"
      overlayClassName="item-modal-overlay"
    >
      <div className="item-details">
        <img src={item.image} alt={item.name} />
        <h2>{item.name}</h2>
        <p>Description: {item.description}</p>
        <p>Price: ${item.price}</p>
        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
      </div>
    </Modal>
  );
};

export default ItemModal;
