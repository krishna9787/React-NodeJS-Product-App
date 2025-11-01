import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./MenuItem.module.css"

export default function MenuItem({label, children}){
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const navigate = useNavigate();
  function handleNavigation(event) {
    navigate('/' + event.target.name)
  }

  function handleToggleSubMenu() {
    setIsSubMenuOpen(prevValue => !prevValue)
  }

  function handleMouseOut() {
    setIsSubMenuOpen(false)
  }


  return (
    <li role="none" className={style.subMenu} onClick={children ? handleToggleSubMenu: undefined} onMouseOver={children ? handleToggleSubMenu: undefined} onMouseOut={handleMouseOut}>
      <Link className={style.link} to={`/product/${label.id}`}>{label.name}</Link>
      {isSubMenuOpen && children}
    </li>
  )
}