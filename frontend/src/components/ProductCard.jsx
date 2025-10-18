import { cartActions } from "../reducer/cart"
import styles from "./ProductCard.module.css"
import {useDispatch} from "react-redux"
export default function ProductCard({id, image, description, name, rate}) {
  const dispatch = useDispatch()

  const handleAddCart = () => {
      dispatch(cartActions.addItemToCart({
        id: id,
        image: image,
        description: description,
        name: name,
        price: rate
      }))
  }

  return (
    <div className={styles.container}>
      <img alt={name} src={image} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{rate}</p>
      <button onClick={handleAddCart}>Add To Cart</button>
    </div>
  )
}