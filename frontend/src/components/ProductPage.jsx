import { useLoaderData } from "react-router-dom"
import ProductCard from "./ProductCard";
import styles from "./ProductPage.module.css"
import { getAuthToken } from "../util/auth";
import Pagination from "./Pagination";

export async function action() {
  console.log("Inside home action")
  const response = await fetch(
          'http://localhost:5000/product',
          {
            method:'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + getAuthToken(),
            },
          }
      )
      const result = await response.json()
      return result
}

export default function ProductPage() {
  const loaderData = useLoaderData();
  return (
    <div className={styles.mainContainer}>
      <h1>Product page</h1>
      <div className={styles.container}>
        {loaderData.map(item => { return <ProductCard id={item.id} image={item.image} description={item.description} name={item.name} rate={item.rate} /> })}
      </div>
      <Pagination length = {loaderData.length}/>
    </div>
  )
}