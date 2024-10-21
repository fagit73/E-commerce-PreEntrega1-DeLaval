import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <Link to={"/detail/" + product.id} className="item">
      <img src={product.image} className="img-item" alt="" width={100} />
      <p className="item-text">{product.name}</p>
      <p className="item-text">${product.price}</p>
      
    </Link>
  )
}
export default Item