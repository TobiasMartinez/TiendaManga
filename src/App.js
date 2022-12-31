import "./App.scss";
import ProductsContainer from "./components/ProductsContainer";
import ItemDetailContainer from "./components/ProductDetail";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ProductsContainer />} />
        <Route exact path="/home" element={<ProductsContainer />} />
        <Route
          exact
          path="/category/:categoryName"
          element={<ProductsContainer />}
        />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route exact path="/cart" element={<CartContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
