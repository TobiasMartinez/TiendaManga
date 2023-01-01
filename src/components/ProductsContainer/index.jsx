import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../ProductItem";
import {collection, getDocs,getFirestore} from 'firebase/firestore'
import Footer from "../Footer";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();


  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "item");


    getDocs(itemCollection).then(result => {
      if(result.docs){
        const products = result.docs.map(item => ({id: item.id, ...item.data()}) )
        
        setProducts(categoryName ? products.filter((product) => product.category === categoryName) : products);
    }});


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
          {products.length == 0 && <p>Cargando...</p>}
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
