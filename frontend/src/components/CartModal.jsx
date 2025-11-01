  import { useSelector } from "react-redux"
  import styles from "./CartModal.module.css"
  import CartItem from "./CartItem"
import Cart from "./Cart"
import { Navigate } from "react-router-dom"

  export default function CartModal() {
    const isLoginSuccessful = useSelector(state => state.auth.isAuthenticated)
    console.log("Is Authenticated: ",isLoginSuccessful)
    return(
      <div className={styles.mainContainer}>
        {isLoginSuccessful ? <Cart /> : <Navigate to="/login" />}
      </div>
    )
  }