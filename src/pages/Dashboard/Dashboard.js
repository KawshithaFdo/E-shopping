import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import ItemModal from "../ItemModal/ItemModal";
import NavBar from "./Navbar/Navbar";
import axios from "axios";
import DefaultImage from "../../assets/default.png";
const itemTypes = ["Apple", "Samsung", "Huawei", "Redmi", "Oppo"];

const Dashboard = ({ setCurrentPage, user }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [apple, setApple] = useState([]);

  useEffect(() => {
    renderData();
  }, []);

  const renderData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/item/category");
      setApple(response.data);
    } catch (error) {
      alert(error);
      console.error("Error fetching data:", error);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleModalClose = async (data) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/cart", {
        userId: user._id,
        itemId: data._id,
        qty: data.quantity,
      });
      setSelectedItem(null);
      renderData();
    } catch (error) {
      alert(error);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <NavBar
        user={user.username}
        profile={() => setCurrentPage("profile")}
        cart={() => setCurrentPage("cart")}
        logout={() => setCurrentPage("homepage")}
        back={() => setCurrentPage("dashboard")}
      />
      <h1>Welcome To Our Store</h1>
      {itemTypes.map((type) => (
        <section key={type} className="homepage-feature">
          <h2>{type}</h2>
          <div className="items-container">
            {apple[type] ? (
              apple[type].map((item) => (
                <div
                  key={item._id}
                  className="product-item"
                  onClick={() => handleItemClick(item)}
                >
                  <img
                    src={item.image ? item.image : DefaultImage}
                    alt={item.name}
                    className="product-img"
                  />
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <h5>qty : {item.qty}</h5>
                </div>
              ))
            ) : (
              <p>No items available for this type.</p>
            )}
          </div>
        </section>
      ))}
      {selectedItem && (
        <ItemModal
          isOpen={!!selectedItem}
          onRequestClose={(data) => handleModalClose(data)}
          item={selectedItem}
        />
      )}
    </div>
  );
};

export default Dashboard;
