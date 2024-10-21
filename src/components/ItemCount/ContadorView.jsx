const ContadorView = ( { contador, actualizarContador } ) => {
    return (
      <div>
        <p>Contador: {contador} </p>
        <button onClick={ actualizarContador } >+</button>
        <button onClick={ actualizarContador } >-</button>
      </div>
    )
  }
  export default ContadorView