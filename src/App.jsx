import "./App.css";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/cart/cart";
import HomePage from "./pages/home/home";
import ProductList from "./pages/productList/productList";
import ProductPage from "./pages/productPage/productPage";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/detail" element={<ProductPage />} />
        <Route path="/product/list" element={<ProductList />} />
      </Routes>
      </Layout>
    </>
  );
}

export default App;
