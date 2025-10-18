import style from "./Login.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import MainMenu from "./MainMenu";

export default function SignUp({onSelect, isLogin}) {

  const navigate = useNavigate();

  const [details, setDetails]= useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  async function handleSubmit(event) {
    console.log("Inside Handle Submit")
    event.preventDefault()
      console.log("Inside try")
    await fetch (
    'http://localhost:5000/signup',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(details)
    }
  )
  }

  function handleChange(event) {
    const {name,value} = event.target
    setDetails(prevValue => ({
      ...prevValue,
      [name]: value,
    }))
  }

  function handleNavigate() {
    navigate("/login")
  }

  return (
    <>
        <MainMenu />
        <div className={style.container}>
        <h1 className={style.a}>Sign Up</h1>
        <div>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.field}>
              <label className={style.loginLabel} htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" label="firstName" placeholder="First Name" onChange={handleChange} value={details.firstName} onBlur={handleChange}/>
            </div>
            <div className={style.field}>
              <label className={style.loginLabel} htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" label="lastName" placeholder="Last Name" onChange={handleChange} value={details.lastName} onBlur={handleChange}/>
            </div>
            <div className={style.field}>
              <label className={style.loginLabel} htmlFor="email">Email</label>
              <input type="email" name="email" label="email" placeholder="Email" onChange={handleChange} value={details.email} onBlur={handleChange}/>
            </div>
            <div className={style.field}>
              <label className={style.loginLabel} htmlFor="password">Password</label>
              <input type="password" name="password" label="password" placeholder="Password" onChange={handleChange} value={details.password} onBlur={handleChange}/>
            </div>
            <div className={style.button}>
              <button className={style.submitButton}>Submit</button>
              <button className={style.submitButton} type="button" onClick={handleNavigate}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}