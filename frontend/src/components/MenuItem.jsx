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

  async function handleSelect(label) {
    const response = await fetch(
      'http://localhost:5000/product?category='+label,
      {
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer' + getAuthToken()
        },
      }
    )
    const result = await response.json()
    return result
  }

  function handleMouseOut() {
    setIsSubMenuOpen(false)
  }

  return (
    <li role="none" className={style.subMenu} onClick={children ? handleToggleSubMenu: undefined} onMouseOver={children ? handleToggleSubMenu: undefined} onMouseOut={handleMouseOut}>
      <Link className={style.link} to={`/product/:${label}`}>{label}</Link>
      {isSubMenuOpen && children}
    </li>
  )
}