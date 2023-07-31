import React, { useState } from "react";
import Modal from "react-modal";
import "./ItemModal.css";
import DefaultImage from "../../assets/default.png";

const ItemModal = ({ isOpen, onRequestClose, item }) => {
  const [quantity, setQuantity] = useState(1); // Initialize the quantity state with 1

  const handleAddToCart = (data) => {
    onRequestClose({ ...data, quantity }); // Pass the selected quantity to the parent component
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="item-modal"
      overlayClassName="item-modal-overlay"
    >
      <div className="item-details">
        <img src={DefaultImage} alt={item.name} />
        <h2>{item.name}</h2>
        <p>Description: {item.description}</p>
        <p>Price: ${item.price}</p>
        <div className="quantity-selector">
          <button className="item-details-increament" onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button className="item-details-increament" onClick={() => handleAddToCart(item)}>Add to Cart</button>
      </div>
    </Modal>
  );
};

export default ItemModal;
