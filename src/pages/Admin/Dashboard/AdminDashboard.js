import React, { useState, useEffect } from "react";
import "../../Dashboard/Dashboard";
import NavBar from "../../Dashboard/Navbar/Navbar";
import axios from "axios";
import DefaultImage from "../../../assets/default.png";
import NewProductModal from "../NewProduct/NewProduct";
const itemTypes = ["Apple", "Samsung", "Huawei", "Redmi", "Oppo"];

const Dashboard = ({ setCurrentPage, admin }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isNewItemModalOpen, setNewItemModalOpen] = useState(false);

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

  const handleClosePaymentModal = () => {
    setNewItemModalOpen(false);
  };

  const addItem = async (data) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/item", {
        name: data.itemName,
        qty: data.qty,
        price: data.price,
        category: data.category,
      });
      renderData();
    } catch (error) {
      alert(error);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <NavBar
        AddItem={() => setNewItemModalOpen(true)}
        logout={() => setCurrentPage("homepage")}
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
      <NewProductModal
        isOpen={isNewItemModalOpen}
        onClose={handleClosePaymentModal}
        onPress={(data) => addItem(data)}
      />
    </div>
  );
};

export default Dashboard;
