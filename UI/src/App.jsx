import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Cart from "./pages/Cart"
import Wishlist from "./pages/Wishlist"
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
