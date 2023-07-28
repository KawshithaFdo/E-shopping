import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import ItemModal from "../ItemModal/ItemModal";
import NavBar from "./Navbar/Navbar";
import axios from "axios";

const itemTypes = ["Apple", "Android", "Huawei", "Redmi", "Oppo"];

// const itemsByType = {
//   // Sample items for demonstration purposes
//   Apple: [
//     {
//       id: 1,
//       name: "iPhone 12",
//       price: 799,
//       image: "https://dummyimage.com/200x200/ccc/fff",
//     },
//     {
//       id: 2,
//       name: "iPhone 12",
//       price: 799,
//       image: "https://dummyimage.com/200x200/ccc/fff",
//     },
//     {
//       id: 3,
//       name: "iPhone 12",
//       price: 799,
//       image: "https://dummyimage.com/200x200/ccc/fff",
//     },
//     {
//       id: 4,
//       name: "iPhone 12",
//       price: 799,
//       image: "https://dummyimage.com/200x200/ccc/fff",
//     },
//     {
//       id: 5,
//       name: "iPhone 12",
//       price: 799,
//       image: "https://dummyimage.com/200x200/ccc/fff",
//     },
//     // Add more items for "Apple" type here...
//   ],
//   Android: [
//     {
//       id: 2,
//       name: "Samsung Galaxy S21",
//       price: 699,
//       image: "https://dummyimage.com/200x200/ccc/fff",
//     },
//     // Add more items for "Android" type here...
//   ],
//   Huawei: [
//     {
//       id: 3,
//       name: "Huawei P30",
//       price: 499,
//       image: "https://dummyimage.com/200x200/ccc/fff",
//     },
//     // Add more items for "Huawei" type here...
//   ],
//   Redmi: [
//     {
//       id: 4,
//       name: "Redmi Note 10",
//       price: 299,
//       image: "https://dummyimage.com/200x200/ccc/fff",
//     },
//     // Add more items for "Redmi" type here...
//   ],
//   Oppo: [
//     {
//       id: 5,
//       name: "Oppo Find X3",
//       price: 599,
//       image: "https://dummyimage.com/200x200/ccc/fff",
//     },
//     // Add more items for "Oppo" type here...
//   ],
// };

const itemsByType = {};
const Dashboard = ({ setCurrentPage }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [apple, setApple] = useState([]);

  useEffect(() => {
    renderIphone();
  }, []);

  const renderIphone = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/item/category");
      setApple(response.data);
      console.log(response.data);
    } catch (error) {
      alert(error);
      console.error("Error fetching data:", error);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleModalClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="dashboard-container">
      <NavBar
        profile={() => setCurrentPage("profile")}
        cart={() => setCurrentPage("cart")}
      />
      <h1>Welcome To Our Store</h1>
      {itemTypes.map((type) => (
        <section key={type} className="homepage-feature">
          <h2>{type}</h2>
          <div className="items-container">
            {/* Use a conditional check before mapping */}
            {apple[type] ? (
              apple[type].map((item) => (
                <div
                  key={item._id}
                  className="product-item"
                  onClick={() => handleItemClick(item)}
                >
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
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
          onRequestClose={handleModalClose}
          item={selectedItem}
        />
      )}
    </div>
  );
};

export default Dashboard;
