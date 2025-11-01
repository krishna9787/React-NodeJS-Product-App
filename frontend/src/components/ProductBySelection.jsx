import { useLoaderData, useParams } from "react-router-dom";
import { MENU_LIST } from "../assets/MenuIList";
import { useEffect } from "react";
import styles from "./ProductBySelection.module.css"
import Pagination from "./Pagination";
import { useRef, useState } from "react";
import ProductCard from "./ProductCard"


function findName(id) {
  const itemName = MENU_LIST.filter(item => item.main.id == id.label)
  if (itemName.length> 0) {
    return itemName[0].main.name
  } else {

    const bada = MENU_LIST.filter(item => {
      const subItem = item.sub.some(val => val.id == id.label)
      return subItem
    })
    const value = bada[0].sub.filter(val => val.id == id.label)
    return value[0].name
  }
}

export async function useLoader({params}) {
  // const params = useParams()
  const value = findName(params)
  const response = await fetch (
  'http://localhost:5000/product/:'+value,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  )
  const result = await response.json()
  console.log(result)
  return result
}

export default function ProductBySelection() {

  const params = useParams()
  const value = findName(params)
  const currentPage = useRef(1)
  const loaderData = useLoaderData()
  const [itemsToBeDisplayed, setItemsToBeSelected] = useState(loaderData.length > 0 ? loaderData.slice(0, 10) : [])
  function handlePageChange(pageSelected) {
    currentPage.current = pageSelected
    const startItem = 10*(pageSelected-1)
    setItemsToBeSelected(loaderData.slice(startItem, startItem+10))
    console.log("Item to display: ", itemsToBeDisplayed)
  }

  return (
     <div className={styles.mainContainer}>
          <h1>Product Page</h1>
          <h2>Displaying results for {value} </h2>
          <div className={styles.container}>
            {loaderData.map(item => { return <ProductCard id={item.id}image={item.image} description={item.description} name={item.name} rate={item.rate} /> })}
          </div>
          {loaderData.length>0 ? <Pagination length = {loaderData.length} current={currentPage} handleChange={(page) => handlePageChange(page)}/> : <h3>Not items to display</h3>}
    </div>
  )
}