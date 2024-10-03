import "./App.css";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/cart/cart";
import HomePage from "./pages/home/home";
import ProductList from "./pages/productList/productList";
import ProductPage from "./pages/productPage/productPage";
import Layout from "./components/layout";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import { useEffect } from "react";
import useStore from "./store/store";
import Wishlist from "./pages/wishlist";

function App() {
  const {setLogin,setLogout}=useStore();
  useEffect(()=>{
   const isLogin = localStorage.getItem("isLogin");
    if(isLogin){
      setLogin(true);
    }
    else{
      setLogout(false);
    }
  },[])
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/product/list" element={<ProductList />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
