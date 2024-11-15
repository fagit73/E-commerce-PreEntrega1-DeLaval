import "./itemdetailcontainer.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true) 
//destructuracion de un objeto
  const { addProductInCart } = useContext(CartContext)
// cuando el usuario de clic en agregar nuevo fruto se ejecuta esta funcion
  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }

    addProductInCart(productCart)

    setShowItemCount(false)
  }

  return (
    <section className='detail'>
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="secondary-images">
        </div>
        <div className="main-image">
          <img src={product.image} alt="" />
        </div>
      </div>
      
      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>

        {
          showItemCount === true ? (
            <ItemCount stock={product.stock} addProduct={addProduct} />
          ) : (
            <Link to="/cart">Terminar mi compra</Link>
          )
        }         
        
      </div>
    </div>
    </section>
  )
}
export default ItemDetail