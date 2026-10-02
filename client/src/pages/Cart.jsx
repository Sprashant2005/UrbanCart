import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((product) => (
              <div className="cart-item" key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="cart-item-info">
                  <h3>{product.name}</h3>

                  <p>₹{product.price}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        decreaseQuantity(product.id)
                      }
                    >
                      −
                    </button>

                    <span>{product.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(product.id)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() =>
                      removeFromCart(product.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Cart Summary</h2>

            <p>
              Subtotal: <strong>₹{total}</strong>
            </p>

            <button>Proceed to Checkout</button>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;