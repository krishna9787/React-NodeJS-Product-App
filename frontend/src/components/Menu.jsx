import style from "./Menu.module.css"

export default function Menu({ children }) {
  return (
    <ul className={style.dropdown} role="menu">{children}</ul>
  )
}