import { useRef } from "react";
import Navbar from "./Navbar.jsx";
import Product from "./Product.jsx";
import Footer from "./Footer.jsx";
import socials from "./data/socials.json";
import products from "./data/products.json";
import "./App.css";

function App() {
  const gridRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const onMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - gridRef.current.offsetLeft;
    scrollLeft = gridRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gridRef.current.offsetLeft;
    const walk = x - startX;
    gridRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUpOrLeave = () => {
    isDown = false;
  };

  return (
    <>
      <Navbar
        title="SuperMarket Testing"
        text="Get a fruit and a fresh React-ion!"
      />

      <div
        className="product-grid"
        ref={gridRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUpOrLeave}
        onMouseLeave={onMouseUpOrLeave}
      >
        {products.map((product) => (
          <Product
            key={product.id}
            imgLink={product.imgLink}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>

      <Footer links={socials} />
    </>
  );
}

export default App;
