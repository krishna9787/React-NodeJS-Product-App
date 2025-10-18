import { Outlet } from "react-router-dom";
import MainMenu from "./MainMenu";
import style from "./RootLayout.module.css"

export default function RootLayout() {
  return <div className={style.mainContainer}>
    <MainMenu />
    <Outlet />
  </div>
}