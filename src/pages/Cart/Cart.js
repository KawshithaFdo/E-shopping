import React, { useState, useEffect } from "react";
import "./Cart.css";
import PaymentDetailsModal from "../PaymentMethods/PaymentModal";
import axios from "axios";
import DefaultImage from "../../assets/default.png";
import NavBar from "../Dashboard/Navbar/Navbar";

const CartScreen = ({ user, setCurrentPage }) => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentData, setPaymentData] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedShippingMethod, setSelectedShippingMethod] =
    useState("standard");

  useEffect(() => {
    renderData();
  }, []);

  const renderData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/cart/${user._id}`
      );
      setCart(response.data);
    } catch (error) {
      alert(error);
      console.error("Error fetching data:", error);
    }
  };

  const handleCheckout = () => {
    setPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setPaymentModalOpen(false);
  };

  const handlePayNow = async (data) => {
    const total = getTotalPrice();
    try {
      const response = await axios.post("http://127.0.0.1:5000/order", {
        userId: user._id,
        totalAmount: total,
        shipping: selectedShippingMethod,
      });
      setCurrentPage("dashboard");
    } catch (error) {
      alert(error);
      console.error("Error fetching data:", error);
    }
    setPaymentData(data);
    console.log("Payment data:", data);
    handleClosePaymentModal();
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.itemDetails.price * item.qty,
      0
    );
  };

  return (
    <div className="cart-screen-container">
      <NavBar
        user={user.username}
        profile={() => setCurrentPage("profile")}
        cart={() => setCurrentPage("cart")}
        logout={() => setCurrentPage("homepage")}
        back={() => setCurrentPage("dashboard")}
      />
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={
                  item.itemDetails.image ? item.itemDetails.image : DefaultImage
                }
                alt={item.name}
              />
              <div className="item-details">
                <h3>{item.itemDetails.name}</h3>
                <p>Price: ${item.itemDetails.price}</p>
                <p>Quantity: {item.qty}</p>
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
        onPayNow={(data) => handlePayNow(data)}
        onShipping={(data) => setSelectedShippingMethod(data)}
      />
    </div>
  );
};

export default CartScreen;
