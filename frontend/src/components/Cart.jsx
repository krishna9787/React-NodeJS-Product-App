import styles from "./CartModal.module.css"
import CartItem from "./CartItem"
import { useSelector } from "react-redux"

export default function Cart() {
  const cartItems = useSelector(state => state.cart.items)
  let totalPrice = 0
  cartItems.map(item => totalPrice = totalPrice + item.totalPrice)
  console.log("Total Price: ", totalPrice)
  console.log("Cart Items: ", cartItems)
  return (
    <div className={styles.container}>
      <h2>Your Shopping Cart</h2>
        {!(cartItems.length === 0) && <ul className={styles.cartTable}>
          {cartItems.map(item => (
            <CartItem key={item.itemId} id ={item.itemId} name={item.name} image = {item.image} description = {item.description} quantity={item.quantity} price={item.price} />
          ))}
        </ul>
        }
      {(cartItems.length === 0) && <h4>No Items in Cart</h4>}
      {!(cartItems.length === 0) && <div className={styles.total}><h3>Total: {totalPrice}</h3></div>}
      {!(cartItems.length === 0) && <div className={styles.checkout}><button>Checkout</button></div>}
    </div>
  )
}