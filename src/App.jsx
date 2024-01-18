import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import React from "react";

function App() {
  const [products, setProducts] = useState([]);
  //async
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log("Data from API:", response.data); // ดูข้อมูลที่ได้จาก API
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.thumbnail} alt={product.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
