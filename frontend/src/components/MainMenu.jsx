import { useEffect, useState } from "react"
import style from "./MainMenu.module.css"
import { useNavigate } from "react-router-dom"
import Menu from "./Menu"
import MenuItem from "./MenuItem"
import {MENU_LIST} from "../assets/MenuIList"
import { useRef } from "react"
import CartModal from "./CartModal"


export default function MainMenu() {
  const modalRef= useRef()
  const navigate = useNavigate();
  function handleNavigation(event) {
    const clickedItem = event.target.name
    navigate('/' + clickedItem)
  }
  return (
    <div className={style.mainMenuContainer}>
      <nav className={style.navigation}>
        <ul className={style.menuItems}>
              { MENU_LIST.map((item, index) => <MenuItem key={index} label={item.main}>
                {<Menu> {item.sub.map(val=> <MenuItem label={val} />)} </Menu>}
              </MenuItem>
            )}
        </ul>
        <div className={style.rightNavigation}>
         <ul className={style.menuItems}>
            <li><button name="cart" onClick={handleNavigation}>Cart</button></li>
            <li><button name="login" onClick={handleNavigation}>Login</button></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}