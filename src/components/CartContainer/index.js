import React, {useContext, useEffect, useState} from 'react'
import {CartContext} from '../../context/CartContext'
import Modal from 'react-modal';
import {addDoc, collection, getFirestore} from 'firebase/firestore'


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
    },
  };


const CartContainer = () => {

    const {cart, removeFromCart, clearCart} = useContext(CartContext);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('No hay productos en el carrito');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [direc, setDirec] = useState('');


    const handleRemove = (itemProduct) => () => {
        removeFromCart(itemProduct)
    }

    const sendOrder = () => {

        const order = {
            buyer: {
                name: name,
                phone: phone,
                email: email,
                direction: direc
            },
            items: cart,
            total: cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(3)

        
        }
        const db = getFirestore();
        const orders = collection(db, 'orders');
        addDoc(orders, order).then(({id}) => {
            alert(id)
            handleCloseModal()
            setTitle('Muchas gracias por su compra!')
            clearCart()

        })

    }

    const handleOpenModal = () => {
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    const handleClear = () => {
        clearCart()
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleDir = (e) => {
        setDirec(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }


    useEffect(() => {
      
    }, [cart])
    
    

  return (
    <div className='container-products' >
        <h1 className='order-title'>Finaliza tu Compra</h1>
        <div className='orders'>
            {cart.length === 0 && <h2>{title}</h2>}
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
        {cart.length > 0 && <button className='order-product__btn--yellow' onClick={handleClear}>Vaciar carrito</button>}
        {cart.length > 0 && <button className='order-product__btn' onClick={handleOpenModal}>Comprar</button>}

        <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
        
      >
        <h2 className='modal-title'>Orden 32132</h2>

       
        <form className='formulario'>
            <label className='modal-label'>Nombre</label>
            <input className='form__input' type='text' placeholder='Nombre' onChange={handleName}></input>
            <label className='modal-label'>Direccion</label>
            <input className='form__input' type='text' placeholder='Direccion' onChange={handleDir}></input>
            <label className='modal-label'>Telefono</label>
            <input className='form__input' type='text' placeholder='Telefono' onChange={handlePhone}></input>
            <label className='modal-label'>Email</label>
            <input className='form__input' type='text' placeholder='Email' onChange={handleEmail}></input>

        </form>

        <div>
           <p>Monto final: <span>${cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(3)}</span></p>

           <p>Metodos de pago: MercadoPago, Paypal, Tarjeta de credito, Efectivo</p>
        </div>

        <div className='buttons'>
        <button className='form__btn' onClick={handleCloseModal}>Cerrar</button>
        <button className='form__btn--green' onClick={sendOrder}>Confirmar compra</button>
        </div>
      </Modal>
    
        </div>
        </div>
    </div>
  )
}

export default CartContainer