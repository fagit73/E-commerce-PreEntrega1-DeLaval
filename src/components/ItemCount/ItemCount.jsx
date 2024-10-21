import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stock,initial, onAdd}) => {
  const [numero, setNumero] = useState(initial);

  const handleSumar = () => {
    if (numero<stock){
      setNumero(numero + 1);
    }
    
  };

  const handleRestar = () => {
    if (numero > 1) {
      setNumero(numero - 1);
    }
  };
  
  const handleAgregar = () =>{
    if (stock>0 && numero > 0){
      onAdd(numero);
    }

  };

  return (
    <div>
      <div className="itemCount-container">
        <button className="btn" onClick={handleRestar}  disabled={numero <= 1}>-</button>
        <p className="numero-cart">{numero}</p>
        <button className="btn" onClick={handleSumar} disabled={numero >= stock}>+</button>
        <button onClick={handleAgregar} className="btn-agregar">Agregar al Carrito</button>
      </div>
      
    </div>
  );
};

export default ItemCount;