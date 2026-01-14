import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Navbar.jsx";
import Product from "./Product.jsx";
import Footer from "./Footer.jsx";
import socials from "./data/socials.json";
import "./App.css";

function App() {
  return (
    <>
      <Navbar
        title="SuperMarket Testing"
        text="Get a fruit and a fresh React-ion!"
      />
      <div class="product-grid">
        <Product
          imgLink="https://res.cloudinary.com/dbfn5lnvx/image/upload/v1726640668/react-tutorial/superm-v2/pineapple.jpg"
          name="Pineapple"
          price={2.0}
        />
        <Product
          imgLink="https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg"
          name="Apple"
          price={3.15}
        />
        <Product
          imgLink="https://images.unsplash.com/photo-1587132137056-bfbf0166836e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuYW5hfGVufDB8fDB8fHww"
          name="Banana"
          price={1.5}
        />
        <Product
          imgLink="https://static.vecteezy.com/system/resources/thumbnails/005/170/812/small/pear-green-with-pear-slices-and-leaves-vitamins-healthy-food-fruit-on-a-white-background-realistic-3d-illustration-vector.jpg"
          name="Pear"
          price={1.66}
        />
      </div>
      < Footer links={socials} />
    </>
  );
}

export default App;
