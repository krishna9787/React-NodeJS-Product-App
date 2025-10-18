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
    navigate('/' + event.target.name)
  }

  return (
    <div className={style.mainMenuContainer}>
      <nav className={style.navigation}>
        {/* <ul className={style.menuItems}>
          <li><button name="" onClick={handleNavigation}>Home</button></li>
          <li><button name="books" on onClick={handleNavigation}>Books</button></li>
          <li><button></button></li>
          <li><button></button></li>
        </ul> */}
        <ul className={style.menuItems}>
              { MENU_LIST.map(item => <MenuItem key={item.sub} label={item.main}>
                {item.sub && <Menu> {item.sub.map(val=> <MenuItem key={val} label={val} />)} </Menu>}
              </MenuItem>
            )}
        </ul>
        <div className={style.rightNavigation}>
         <ul className={style.menuItems}>
            <li><button name="cart" onClick={handleNavigation}>Cart</button></li>
            <li><button name="login" onClick={handleNavigation}>Login</button></li>
            <li><button name="profile" onClick={handleNavigation}>Profile</button></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}