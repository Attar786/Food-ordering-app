import './PlaceOrder.css'
const PlaceOrder = () => {
  return (

<form>order page
  <div className="place-order-left">
    <p className="title">Delivery Information</p>
    <div className="multi-fields">
      <input type="text"  placeholder = "First Name" />
      <input type="text" placeholder = "Last Name" />
    </div>
    <input type='email' placeholder='Email' />
    <input type='email' placeholder='Street' />
    </div>
</form>
  )
}

export default PlaceOrder