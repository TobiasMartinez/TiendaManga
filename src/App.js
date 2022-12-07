import "./App.scss";
import ProductsContainer from "./components/ProductsContainer";
import ItemDetailContainer from "./components/ProductDetail";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ProductsContainer />} />
        <Route
          exact
          path="/category/:categoryName"
          element={<ProductsContainer />}
        />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
