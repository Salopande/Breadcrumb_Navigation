import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import ProductsDetails from "./pages/productsDetails";
import "./App.css";
import Breadcrumbs from "./components/breadcrumbs";


function App() {
  
  return (
    <BrowserRouter>
      <Breadcrumbs/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/products" element={<Products/>}/>
        <Route  path="/products/:id" element={<ProductsDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
