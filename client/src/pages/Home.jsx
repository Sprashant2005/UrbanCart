import ProductCard from "../components/ProductCard";
import products from "../data/product";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small">NEW COLLECTION 2026</p>

          <h1>
            Style that
            <br />
            speaks for you.
          </h1>

          <p>
            Discover trending fashion, everyday essentials,
            and everything in between.
          </p>

          <button>Shop Now</button>
        </div>
      </section>

      <section className="categories">
        <h2>Shop by Category</h2>

        <div className="category-grid">
          <div className="category-card">
            <h3>Men</h3>
            <p>Explore men's fashion</p>
          </div>

          <div className="category-card">
            <h3>Women</h3>
            <p>Discover women's fashion</p>
          </div>

          <div className="category-card">
            <h3>Sneakers</h3>
            <p>Step up your style</p>
          </div>

          <div className="category-card">
            <h3>Accessories</h3>
            <p>Complete your look</p>
          </div>
        </div>
      </section>

      <section className="products-section">
        <h2>Featured Products</h2>

        <div className="product-grid">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    </section>

    </main>
  );
}

export default Home;