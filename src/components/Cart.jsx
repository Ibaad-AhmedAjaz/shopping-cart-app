function Cart({ cart, onQuantityChange, onRemove }) {
    const cartItems = Object.values(cart);
  
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  
    return (
      <div>
        <h2>Cart</h2>
        {cartItems.length === 0 && <p>Cart is empty.</p>}
        {cartItems.map((item) => (
  <div key={item.id} className="cart-item">
    <div>
      <strong>{item.name}</strong>
      <p>
        ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
      </p>
    </div>
    {item.price !== 0 && (
      <div className="qty-controls">
        <button className="minus" onClick={() => onQuantityChange(item.id, -1)}>-</button>
        <span>{item.quantity}</span>
        <button className="plus" onClick={() => onQuantityChange(item.id, 1)}>+</button>
      </div>
    )}
  </div>
))}

        <p><strong>Subtotal:</strong> ₹{subtotal}</p>
      </div>
    );
  }
  
  export default Cart;
  