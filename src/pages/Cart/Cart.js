import React, { useState } from "react";
import "./Cart.css";
import PaymentDetailsModal from "../PaymentMethods/PaymentModal";

const CartScreen = () => {
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
    const [paymentData, setPaymentData] = useState(null);

   const handleCheckout = () => {
    setPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setPaymentModalOpen(false);
  };

  const handlePayNow = (data) => {
    setPaymentData(data);
    // Perform payment processing here (e.g., API call)
    // You can use the paymentData to send the card details to the backend
    console.log('Payment data:', data);
    handleClosePaymentModal();
  };

  const cartItems = [
    {
      id: 1,
      name: "Dummy Phone 1",
      price: 399,
      quantity: 1,
      image: "https://dummyimage.com/200x200/ccc/fff",
    },
    {
      id: 2,
      name: "Dummy Phone 2",
      price: 299,
      quantity: 2,
      image: "https://dummyimage.com/200x200/ccc/fff",
    },
    // Add more dummy cart items here...
  ];

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-screen-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="total-price">
            <h3>Total Price: ${getTotalPrice()}</h3>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
     <PaymentDetailsModal
        isOpen={isPaymentModalOpen}
        onClose={handleClosePaymentModal}
        onPayNow={handlePayNow}
      />
    </div>
  );
};

export default CartScreen;
