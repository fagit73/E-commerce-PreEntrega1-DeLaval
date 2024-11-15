import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import cart from "../../assets/cart3.svg"
import './CartWidget.css'
import { Link } from "react-router-dom"


const CartWidget = () => {
    //quiero consumir la informacion de mi cartcontext
    const { totalQuantity } = useContext(CartContext)

    const quantity = totalQuantity()


    return (
        <Link to="/cart" className="cartwidget">
            <img src={cart} className={ quantity === 0 ? "empty-cart" : "icon-cart" } />           
            <p className="number-cartwidget">{ quantity >= 1 && quantity }</p>           
        </Link>
    )
}

export default CartWidget