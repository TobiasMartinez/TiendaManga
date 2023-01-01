import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ProductItem = ({ id, name, price, stock, imgPath, category }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [stockAvaible, setStockAvaible] = React.useState(stock);

  const { addToCart } = React.useContext(CartContext);

  const handleAddToCart = () => {

    if( quantity > stockAvaible ) return
    addToCart({ id, name, price, stock, imgPath, quantity, category });
    setStockAvaible(stockAvaible - quantity);
 
  };


  useEffect(() => {
  }, [quantity]);


  return (
    <div className="product-item">
      <NavLink to={`/item/${id}`}>
        <img className="product-item__img" src={imgPath} alt={name} />
      </NavLink>
      <div className="product-item__details">
        <NavLink to={`/item/${id}`}>
          <h3 className="product-item__details--name">{name}</h3>
        </NavLink>
        <p className="product-item__details--price">${price}</p>
      </div>
      <div className="product-item__buttons">
        <button
          className="product-item__buttons--remove"
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="product-item__buttons--quantity">{quantity}</span>
        <button
          className="product-item__buttons--add"
          onClick={() => setQuantity(quantity + 1)}
          disabled={stockAvaible <= quantity}
        >
          +
        </button>
      </div>
      <button className="product-item__cart" onClick={handleAddToCart} disabled={stockAvaible < quantity} >{stockAvaible <= 0 ?  'No hay mas stock': 'Agregar Al carrito'  }</button>
    </div>
  );
};

export default ProductItem;
