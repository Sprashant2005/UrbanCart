import ProductCard from "../components/ProductCard";
import products from "../data/product";

function Products() {
  return (
    <main className="products-page">
      <div className="products-header">
        <h1>All Products</h1>
        <p>Find something you'll love.</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}

export default Products;