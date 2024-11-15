import './Checkout.css'

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    return (
      <div class="centraformulario">
      <form onSubmit={handleSubmitForm}>
      <div class="input-group">

        <label>Nombre completo</label>
        <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />
  
        <label>Telefono</label>
        <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />
  
        <label>Email</label>
        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />
        </div>
        <button class="btn" type="submit">Enviar mi orden</button>
  
      </form>
      </div> 
    )
  }
  export default FormCheckout