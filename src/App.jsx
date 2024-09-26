import "./App.css";
import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route />
        <Route />
        <Route />
      </Routes>
    </Layout>
  );
}

export default App;
