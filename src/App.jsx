import { useEffect, useState } from "react";
import { PRODUCTS, FREE_GIFT, THRESHOLD } from "./constants";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [cart, setCart] = useState({});
  const [showGiftMessage, setShowGiftMessage] = useState(false);

  const addToCart = (product, quantity) => {
    setCart((prev) => {
      const existing = prev[product.id];
      const newQuantity = existing ? existing.quantity + quantity : quantity;
      return {
        ...prev,
        [product.id]: { ...product, quantity: newQuantity },
      };
    });
  };

  const changeQuantity = (id, delta) => {
    setCart((prev) => {
      const updated = { ...prev };
      const item = updated[id];
      if (!item) return prev;

      const newQty = item.quantity + delta;
      if (newQty <= 0) {
        delete updated[id];
      } else {
        updated[id].quantity = newQty;
      }
      return updated;
    });
  };

  const removeItem = (id) => {
    if (id === FREE_GIFT.id) return;
    setCart((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const subtotal = Object.values(cart)
    .filter((item) => item.id !== FREE_GIFT.id)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    setCart((prev) => {
      const updated = { ...prev };
      const hasGift = !!updated[FREE_GIFT.id];

      if (subtotal >= THRESHOLD && !hasGift) {
        updated[FREE_GIFT.id] = { ...FREE_GIFT, quantity: 1 };
        setShowGiftMessage(true);
        setTimeout(() => setShowGiftMessage(false), 3000);
      } else if (subtotal < THRESHOLD && hasGift) {
        delete updated[FREE_GIFT.id];
      }

      return updated;
    });
  }, [subtotal]);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <ProductList products={PRODUCTS} onAddToCart={addToCart} />
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p><strong>Subtotal:</strong> ₹{subtotal}</p>
        <ProgressBar subtotal={subtotal} />
        {showGiftMessage && <p className="gift-message">🎁 Free gift added to cart!</p>}
      </div>
      <div className="cart-items">
        <h2>Cart Items</h2>
        <Cart
          cart={cart}
          onQuantityChange={changeQuantity}
          onRemove={removeItem}
        />
      </div>
    </div>
  );
  
}

export default App;
