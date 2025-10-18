import styles from "./Home.module.css"
import MainMenu from "./MainMenu";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getAuthToken } from "../util/auth";
import Pagination from "./Pagination";
import { useState } from "react";
import { useRef } from "react";

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



export default function Home() {
  const currentPage = useRef(1)
  const loaderData = useLoaderData();
  const [itemsToBeDisplayed, setItemsToBeSelected] = useState(loaderData.length > 0 ? loaderData.slice(0, 10) : [])


  function handlePageChange(pageSelected) {
    currentPage.current = pageSelected
    const startItem = 10*(pageSelected-1)
    setItemsToBeSelected(loaderData.slice(startItem, startItem+10))
    console.log("Item to display: ", itemsToBeDisplayed)
  }
  return (
    <div className={styles.mainContainer}>
      <h1>Home Page</h1>
      <div className={styles.container}>
        {itemsToBeDisplayed.map(item => { return <ProductCard id={item.id}image={item.image} description={item.description} name={item.name} rate={item.rate} /> })}
      </div>
      <Pagination length = {loaderData.length} current={currentPage} handleChange={(page) => handlePageChange(page)}/>
    </div>
  )
}