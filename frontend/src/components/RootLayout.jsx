import { Outlet, useLoaderData } from "react-router-dom";
import MainMenu from "./MainMenu";
import style from "./RootLayout.module.css"

export default function RootLayout() {
  const actionValue = useLoaderData()
  return <div className={style.mainContainer}>
    <MainMenu />
    <Outlet />
  </div>
}