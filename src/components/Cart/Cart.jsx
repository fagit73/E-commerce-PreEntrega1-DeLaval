import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import Swal from "sweetalert2" // Importar SweetAlert2
import "./Cart.css"

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

  // Verificar si el carrito está vacío
  if (cart.length === 0) {
    // Mostrar SweetAlert2 con mensaje y botón
    Swal.fire({
      title: 'No hay productos en el carrito 😥',
      text: 'Parece que aún no has agregado nada al carrito.',
      icon: 'info',
      confirmButtonText: 'Volver al inicio',
      confirmButtonColor: '#8A2BE2', // Color BlueViolet
      background: '#f0f8ff', // Fondo claro
      customClass: {
        confirmButton: 'swal-button'
      }
    }).then(() => {
      // Cuando el usuario haga clic en "Volver al inicio", redirigirlo
      window.location.href = '/'; 
    })
    
    // No se sigue renderizando el resto de la página si el carrito está vacío
    return null;
  }

  return (
    <div className="cart">
      <h2 className="title-cart">Productos en el carrito</h2>
      {
        cart.map((productCart) => (
          <div className="productosencarrito" key={productCart.id} style={{ display: "flex", justifyContent: "space-around" }}>
            <img className="image-cart" src={productCart.image} width={100} alt="" />
            <p className="text-item-cart">{productCart.name}</p>
            <p className="text-item-cart">Cantidad: {productCart.quantity}</p>
            <p className="text-item-cart">Precio c/u: {productCart.price}</p>
            <p className="text-item-cart">Precio parcial: {productCart.quantity * productCart.price}</p>

            <button className="borrarproducto" onClick={() => deleteProductById(productCart.id)}>Borrar Producto</button>
          </div>
        ))
      }

      <div className="info-cart">
        <p className="preciototal">Precio total: {totalPrice()}</p>
        <button className="borrarcarrito" onClick={deleteCart}>Borrar carrito</button>
        <Link to="/checkout" className="Terminarmicompra">Terminar mi compra</Link>
      </div>
    </div>
  )
}

export default Cart
