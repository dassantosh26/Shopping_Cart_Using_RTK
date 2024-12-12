/** @format */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ProductList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
