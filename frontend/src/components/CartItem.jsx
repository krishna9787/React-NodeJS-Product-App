import { useDispatch } from "react-redux"
import styles from "./CartItem.module.css"
import {cartActions} from "../reducer/cart"

export default function CartItem({id, name, image, description, quantity, price}) {
  const dispatch = useDispatch()
  function handleChange(changeType) {
    if (changeType === "decrement") {
      dispatch(cartActions.removeItemFromCart())
    } else if (changeType === "increment"){
      dispatch(cartActions.addItemToCart({
        id: id,
        image: image,
        description: description,
        name: name,
        price: price
      }))
    }
  }

  return (
    <li className={styles.container}>
      <div>{name}</div>
      <div className={styles.changeCount}>
        <button onClick={() => handleChange("decrement")} className={styles.changeButton}>&lt;</button>
        <div>{quantity}</div>
        <button onClick={() => handleChange("increment")} className={styles.changeButton}>&gt;</button>
      </div>
      <div>{price}</div>
    </li>
  )
}