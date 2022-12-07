import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../ProductItem";
import data from "../ProductDetail/data.json";
import Footer from "../Footer";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryName } = useParams();

  const getProducts = async () => {
    // Intente usar un fetch al data.json pero me tira error
    // const response = await fetch("data.json");

    // console.log(categoryName);

    // const data = await response.json();

    const products = categoryName
      ? data.filter((product) => product.category === categoryName)
      : data;

    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="layout">
      <h2 className="layout__title">Nuestras Publicaciones</h2>
      <div className="products">
        <div className="products__categories">
          <h3 className="products__categories--title">Editoriales</h3>
          <ul className="products__categories--list">
            <li className="products__categories--list-item">
              <a href="/category/Ivrea">Ivrea</a>
            </li>
            <li className="products__categories--list-item">
              <a href="/category/Panini">Panini</a>
            </li>
            <li className="products__categories--list-item">
              <a href="/category/Ovni">Ovni</a>
            </li>
          </ul>
        </div>
        <div className="products__list">
          {products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ItemListContainer;
