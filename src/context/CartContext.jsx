import { createContext, useState } from "react";

//creamos un contexto llamado CartContext
const CartContext = createContext()

//componente que envuelve mi aplicacion 
const CartProvider = ({ children }) => {
  //esta variable de estado que estamos creando es para guardar todos los productos que vayamos guardando en el carrito como sabemos que van a ser muchos productos nos conviene que se un array de objetos
  const [cart, setCart] = useState([])

  //Agragamos informacion al carrito y guardamos lo que ya estaba en el carrito y luego podemos agregar un nuevo producto 
  const addProductInCart = (newProduct) => {

    const condicion = isIncart(newProduct.id)
    if(condicion){
      //sumar cantidades
      const tempCart = [...cart]
      const findIndex = tempCart.findIndex( (productCart)=> productCart.id === newProduct.id )
      tempCart[findIndex].quantity = tempCart[findIndex].quantity + newProduct.quantity
      
      setCart(tempCart)
    }else{
      //guardarlo como producto nuevo
      setCart( [ ...cart, newProduct ] )
    }
  }

  //funcion que devuelve true o false dependiendo si el producto a comprobar esta en el carrito
  const isIncart = (idProduct) => {
    return cart.some( (productCart) => productCart.id === idProduct )
  }

  //cantidad total de productos comienza en 0

  const totalQuantity = () => {
    const quantity = cart.reduce( (total, productCart) => total + productCart.quantity, 0)
    return quantity
  }

  //precio total de la compra
  const totalPrice = () => {
    const price = cart.reduce( (total, productCart) => total + ( productCart.quantity * productCart.price), 0 )
    return price
  }

  const deleteProductById = (idProduct) => {
    const filterProducts = cart.filter( (productCart) => productCart.id !== idProduct )
    setCart(filterProducts)
  }

  const deleteCart = () =>{
    setCart([])
  }

  return(
     //Primeras llaves para incorporar codigo javascrip y las otras llaves es que estamos enviando un objeto que dentro de ese objeto van a ir todos los datos que nos nosotros querramos que sean globales para todos los children que envolvimos
    <CartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart } } >
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }

