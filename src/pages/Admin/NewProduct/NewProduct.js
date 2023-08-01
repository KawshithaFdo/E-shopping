import React, { useState } from "react";
import Modal from "react-modal";
import "./NewProduct";

Modal.setAppElement("#root");

const NewProductModal = ({ isOpen, onClose, onPress }) => {
  const [itemName, setItemName] = useState("");
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("Apple");

  const handleCloseModal = () => {
    onClose();
  };

  const handleAddProduct = () => {
    if (itemName && qty && price && category) {
      const newProduct = {
        itemName,
        qty,
        price,
        category,
      };
      onPress(newProduct);
      handleCloseModal();
    } else {
      alert("Please fill in all product details");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className="payment-modal-content"
      overlayClassName="payment-modal-overlay"
    >
      <div>
        <h2>Add Product</h2>
        <form>
          <div className="form-group">
            <label>Item Name</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Quantity (Qty)</label>
            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(parseInt(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Huawei">Huawei</option>
              <option value="Redmi">Redmi</option>
              <option value="Oppo">Oppo</option>
            </select>
          </div>
          <button type="button" onClick={handleAddProduct}>
            Add Product
          </button>
          <button type="button" onClick={handleCloseModal}>
            Cancel
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default NewProductModal;
