import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error.message)
  return (
    <>
      <h1>Error Page</h1>
      <p>{error.message}</p>
    </>
  )
}