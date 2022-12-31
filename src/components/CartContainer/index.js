import React, {useContext, useState, useEffect} from 'react'
import {CartContext} from '../../context/CartContext'


const CartContainer = () => {

    const {cart, removeFromCart, clearCart} = useContext(CartContext);


    const handleRemove = (itemProduct) => () => {
        removeFromCart(itemProduct)
    }

    const handleClear = () => {
        clearCart()
    }

    console.log(cart);

    
    useEffect(() => {
      
    }, [cart])
    
    

  return (
    <div className='container-products' >
        <h1 className='order-title'>Orden</h1>
        <div className='orders'>
            {cart.length === 0 && <h2>No hay productos en el carrito</h2>}
        {cart.map(item => (            
            <div key={item.id} className='order-product'>
                
                <img className='order-product__img'src={item.imgPath
                } alt={item.title} />
                <div className='order-product__info'>
                    <h2 className='order-product__title'>{item.name}</h2>
                    <h4 className='order-product__category'>{item.category}</h4>
                </div>
                <p className='order-product__quantity'>{item.quantity}</p>
                <p className='order-product__price'>{(item.price * item.quantity).toFixed(3)}</p>
                <button className='order-product__btn--order' onClick={handleRemove(item)}>Eliminar</button>
                </div>
                
        ))}
        <div className='buttons'>
        {cart.length > 0 && <button className='order-product__btn'>Comprar</button>}
        {cart.length > 0 && <button className='order-product__btn' onClick={handleClear}>Vaciar carrito</button>}
        </div>
        </div>
    </div>
  )
}

export default CartContainer