import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  const getProduct = async () => {
    const product = data.find((product) => product.id === parseInt(id));
    setProduct(product);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="product-container">
      <h1 className="product-detail__description--title">{product.name}</h1>
      <div className="product-detail">
        <img src={product.imgPath || ""} alt={product.name} />

        <div className="product-detail__info">
          <p className="product-detail__info--resume">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            laboriosam placeat beatae libero. Perspiciatis a eveniet dolores
            ipsum dignissimos molestiae sequi velit provident, iusto placeat
            blanditiis quasi! Similique, necessitatibus nihil? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quia rem quam temporibus iste
            id fugit vero, quisquam quasi laudantium et quod exercitationem
            quidem numquam facere enim! Beatae mollitia fuga inventore. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Aut quasi et,
            numquam mollitia magni est, earum possimus unde laudantium tempore
            ab non dolore. Debitis in dignissimos quisquam aliquid obcaecati
            necessitatibus.
          </p>
          <p className="product-detail__info--price">${product.price}</p>

          <p className="product-detail__info--stock">
            Articulos disponibles: {product.stock}
          </p>
        </div>
      </div>
      <button className="button-comprar">Comprar</button>
    </div>
  );
};

export default ProductDetail;
