import { useParams } from "react-router-dom";

export default function ProductBySelection() {
  const params = useParams()

  return (
    <h2>{params}</h2>
  )
}