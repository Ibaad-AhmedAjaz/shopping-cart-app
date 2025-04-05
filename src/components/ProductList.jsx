import { useState } from "react";

function ProductList({ products, onAddToCart }) {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  return (
    <div className="products">
  {products.map((product) => (
    <div key={product.id} className="card">
      <strong>{product.name}</strong>
      <p>₹{product.price}</p>
      <button
        className="add-btn"
        onClick={() => onAddToCart(product, quantities[product.id] || 1)}
      >
        Add to Cart
      </button>
    </div>
  ))}
</div>

  );
}

export default ProductList;
