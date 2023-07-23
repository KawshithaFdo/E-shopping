import React from "react";
import "./HomePage.css";
const latestProducts = [
  {
    id: 1,
    name: "Dummy Phone 1",
    price: 399,
    image: "https://dummyimage.com/200x200/ccc/fff",
  },
  {
    id: 2,
    name: "Dummy Phone 2",
    price: 299,
    image: "https://dummyimage.com/200x200/ccc/fff",
  },
  // Add more dummy items here...
];
const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Welcome to Mobile Shop</h1>
        <p>Your one-stop shop for mobile phones!</p>
      </header>
      <main className="homepage-main">
        <section className="homepage-feature">
          <h2>Latest Arrivals</h2>
          <div className="latest-products-container">
            {latestProducts.map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="homepage-feature">
          <h2>Best Sellers</h2>
          {/* Add some content for best-selling mobile phones */}
        </section>
        <section className="homepage-feature">
          <h2>Special Offers</h2>
          {/* Add some content for special offers */}
        </section>
      </main>
      <footer className="homepage-footer">
        <p>Contact us: support@mobileshop.com</p>
        <div className="homepage-buttons">
          <button className="button" onClick={() => setCurrentPage("login")}>
            Login
          </button>
          <button className="button" onClick={() => setCurrentPage("signup")}>
            Signup
          </button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
