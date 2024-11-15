import { useState } from "react"
import { Link } from 'react-router-dom'
import "./ItemCount.css"

const ItemCount = ({ stock, addProduct }) => {
  const [count, setCount] = useState(1)

  const handleClickRest = () => {
    if(count > 1){
      //modificamos nuestro estado
      setCount(count - 1)
    }
  }
//Los eventos llevan la palabra handle y el nombre del evento en este caso Click
  const handleClickAdd = () => {
    if(count < stock){
      // nuestra funcion para sumar
      setCount(count + 1)
    }
  }

  return (

    <div className="updowncontador">
  <div className="btn-container">
    <button onClick={handleClickRest}>-</button>
    <p>{count}</p>
    <button onClick={handleClickAdd}>+</button>
  </div>
  <button className="agregaralcarrito" onClick={() => addProduct(count)}>
    Agregar al carrito
  </button>
  <Link to="/" className="volver-inicio">
    Volver al inicio
  </Link>
  </div>  
   

  )
}
export default ItemCount