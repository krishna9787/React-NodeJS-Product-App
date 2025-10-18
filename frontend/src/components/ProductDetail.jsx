import { useRouteLoaderData } from "react-router-dom"

export async function action() {
  console.log("Inside home action")
  const response = await fetch(
          'http://localhost:5000/product',
          {
            method:'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
      )
      const result = await response.json()
      return result
}

export default function ProductDetail() {
  const { event, events } = useRouteLoaderData('product-id');
  return (
        <div className={styles.mainContainer}>
          <h1>Product page</h1>
          <div className={styles.container}>
            {loaderData.map(item => { return <ProductCard id={item.id} image={item.image} description={item.description} name={item.name} rate={item.rate} /> })}
          </div>
        </div>
  )
}