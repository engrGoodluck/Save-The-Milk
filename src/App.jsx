import { useState } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Baby,
  PackageCheck,
  Plane,
  Sparkles,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import "./App.css";

const categories = [
  {
    name: "Baby Milk & Nutrition",
    description: "Thoughtful nutrition for little ones.",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=85",
    icon: Baby,
  },
  {
    name: "Mother's Care",
    description: "A little extra care for every mother.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=85",
    icon: Heart,
  },
  {
    name: "Breastmilk Shipping",
    description: "Shipping solutions for precious milk.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=85",
    icon: Plane,
  },
  {
    name: "Shipping Kits",
    description: "Everything you need for your journey.",
    image:
      "https://images.unsplash.com/photo-1604917877934-07d8d248d396?w=800&q=85",
    icon: PackageCheck,
  },
];

const products = [
  {
    id: 1,
    name: "Premium Milk Storage Bags",
    category: "Shipping Kits",
    price: 24.99,
    size: "50 bags",
    tag: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1604917877934-07d8d248d396?w=700&q=85",
  },
  {
    id: 2,
    name: "Motherhood Essentials Set",
    category: "Mother's Care",
    price: 39.99,
    size: "Care collection",
    tag: "MOTHER FAVOURITE",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700&q=85",
  },
  {
    id: 3,
    name: "Insulated Travel Cooler",
    category: "Shipping Kits",
    price: 49.99,
    size: "Travel essential",
    tag: "TRAVEL READY",
    image:
      "https://images.unsplash.com/photo-1589363360147-4f2d51541551?w=700&q=85",
  },
  {
    id: 4,
    name: "Baby Care Gift Collection",
    category: "Baby Milk & Nutrition",
    price: 34.99,
    size: "Gift collection",
    tag: "THOUGHTFUL GIFT",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=700&q=85",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const addToCart = (product) => {
    setCart((current) => [...current, product]);
  };

  return (
    <div className="site-shell">
      {/* Announcement */}
      <div className="announcement-bar">
        <Sparkles size={14} />
        <span>MADE FOR MOTHERHOOD. DESIGNED WITH LOVE.</span>
        <a href="#categories">
          EXPLORE OUR COLLECTION <ArrowUpRight size={13} />
        </a>
      </div>

      {/* Header */}
      <header className="site-header">
        <a href="#home" className="brand">
          <img src="/images/save-the-milk-logo.png" alt="Save The Milk" />
        </a>

        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#categories" onClick={() => setMenuOpen(false)}>
            Shop
          </a>
          <a href="#shipping" onClick={() => setMenuOpen(false)}>
            Milk Shipping
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Our Story
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <div className="header-actions">
          <button className="icon-button" aria-label="Search">
            <Search size={20} />
          </button>

          <button className="cart-button" aria-label="Shopping bag">
            <ShoppingBag size={20} />
            <span>Bag</span>
            <span className="cart-count">{cart.length}</span>
          </button>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero-section" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              HERE FOR EVERY STEP OF MOTHERHOOD
            </div>

            <h1>
              Because every
              <br />
              drop of love
              <br />
              <span>matters.</span>
            </h1>

            <p>
              From nourishing little ones to supporting mothers and making
              breastmilk shipping easier, we're here to make your motherhood
              journey a little smoother.
            </p>

            <div className="hero-buttons">
              <a href="#categories" className="primary-button">
                Explore our shop <ArrowRight size={18} />
              </a>

              <a href="#shipping" className="text-button">
                Discover milk shipping <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="hero-note">
              <Heart size={18} fill="currentColor" />
              <span>Thoughtful essentials for mothers and little ones.</span>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=1100&q=90"
              alt="Mother sharing a loving moment with her baby"
            />

            <div className="hero-floating-card">
              <span className="floating-icon">
                <Heart size={21} />
              </span>
              <div>
                <strong>Made with care</strong>
                <small>For every motherhood journey</small>
              </div>
            </div>

            <div className="hero-circle">
              LOVE
              <span>✳</span>
              CARE
            </div>
          </div>

          <div className="hero-bottom-note">
            <span>LOVE IN EVERY LITTLE DETAIL</span>
            <span>01 / SAVE THE MILK</span>
          </div>
        </section>

        {/* Trust strip */}
        <section className="benefits-strip">
          <div className="benefit-item">
            <Heart size={24} />
            <div>
              <strong>Made for Mothers</strong>
              <small>Thoughtful motherhood essentials</small>
            </div>
          </div>

          <div className="benefit-item">
            <PackageCheck size={24} />
            <div>
              <strong>Curated Essentials</strong>
              <small>Products for everyday needs</small>
            </div>
          </div>

          <div className="benefit-item">
            <Plane size={24} />
            <div>
              <strong>Shipping Solutions</strong>
              <small>Explore breastmilk shipping</small>
            </div>
          </div>

          <div className="benefit-item">
            <Headphones size={24} />
            <div>
              <strong>Here to Help</strong>
              <small>Support when you need it</small>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="categories-section" id="categories">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                THOUGHTFULLY CURATED FOR YOU
              </div>
              <h2>
                Everything you need, <span>all in one place.</span>
              </h2>
              <p>
                Explore our collections, created around the needs of mothers and
                their little ones.
              </p>
            </div>

            <a href="#products" className="view-all-link">
              Explore products <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="categories-grid">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <a
                  href="#products"
                  className="category-card"
                  key={category.name}
                >
                  <div className="category-image">
                    <img src={category.image} alt={category.name} />
                    <span className="category-number">0{index + 1}</span>
                  </div>

                  <div className="category-info">
                    <div>
                      <span className="category-icon">
                        <Icon size={17} />
                      </span>
                      <h3>{category.name}</h3>
                      <p>{category.description}</p>
                    </div>
                    <ArrowUpRight size={20} />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Products */}
        <section className="products-section" id="products">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                THE LITTLE THINGS THAT MATTER
              </div>
              <h2>
                Our <span>favourites.</span>
              </h2>
              <p>Discover thoughtful essentials for you and your family.</p>
            </div>

            <a href="#categories" className="view-all-link">
              Browse collections <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="category-tabs">
            {["All", ...categories.map((item) => item.name)].map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "category-tab active"
                    : "category-tab"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="product-tag">{product.tag}</span>

                  <button
                    className="wishlist-button"
                    aria-label="Add to wishlist"
                  >
                    <Heart size={19} />
                  </button>

                  <button
                    className="quick-add"
                    onClick={() => addToCart(product)}
                  >
                    Add to bag <ArrowUpRight size={16} />
                  </button>
                </div>

                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <div className="product-bottom">
                    <span>{product.size}</span>
                    <strong>${product.price.toFixed(2)}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Shipping feature */}
        <section className="shipping-section" id="shipping">
          <div className="shipping-image">
            <img
              src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1000&q=90"
              alt="Mother and baby"
            />
            <div className="shipping-image-note">
              <Plane size={21} />
              <span>LOVE KNOWS NO DISTANCE</span>
            </div>
          </div>

          <div className="shipping-content">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              BREASTMILK SHIPPING
            </div>

            <h2>
              Wherever life
              <br />
              takes you,
              <br />
              <span>stay connected.</span>
            </h2>

            <p>
              Explore dedicated breastmilk shipping solutions and specialised
              kits designed to help families navigate the journey of
              transporting breastmilk.
            </p>

            <a href="#products" className="primary-button">
              Explore shipping kits <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* About */}
        <section className="about-section" id="about">
          <div className="about-content">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              THE HEART BEHIND THE BRAND
            </div>

            <h2>
              Motherhood is a journey.
              <br />
              <span>We're here for yours.</span>
            </h2>

            <p>
              We believe mothers deserve thoughtful products, convenient
              solutions and support at every stage. Save The Milk brings
              motherhood essentials and breastmilk shipping resources together
              in one place.
            </p>

            <a href="#contact" className="text-button">
              Get in touch <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter-section" id="contact">
          <div>
            <span className="newsletter-label">
              A LITTLE LOVE IN YOUR INBOX
            </span>
            <h2>Let's keep in touch.</h2>
            <p>
              Stay connected with product updates, helpful resources and more.
            </p>
          </div>

          <form
            className="newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <input type="email" placeholder="Your email address" required />
            <button type="submit">
              Subscribe <ArrowRight size={17} />
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <img src="/images/save-the-milk-logo.png" alt="Save The Milk" />
            </a>

            <p>
              Thoughtful essentials and caring solutions for mothers, babies and
              families.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h4>Explore</h4>
              <a href="#home">Home</a>
              <a href="#categories">Shop collections</a>
              <a href="#products">Featured products</a>
            </div>

            <div>
              <h4>Our Services</h4>
              <a href="#shipping">Breastmilk shipping</a>
              <a href="#categories">Shipping kits</a>
              <a href="#about">About us</a>
            </div>

            <div>
              <h4>Need Help?</h4>
              <a href="#contact">Contact us</a>
              <a href="#contact">Customer support</a>
              <a href="#contact">FAQs</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Save The Milk. All rights reserved.
          </span>
          <span>
            Made with love. <Heart size={14} />
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
