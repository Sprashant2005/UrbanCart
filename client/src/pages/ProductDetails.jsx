import { useParams } from "react-router-dom";
import Products from '../data/product';
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = Products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <main className="product-details">
      <div className="product-details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details-info">
        <p className="product-category">{product.category}</p>

        <h1>{product.name}</h1>

        <p className="product-details-price">
          ₹{product.price}
        </p>

        <p className="product-description">
          A premium product from the UrbanCart collection.
          Designed for everyday style and comfort.
        </p>

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </main>
  );
}

export default ProductDetails;