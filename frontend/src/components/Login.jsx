import style from "./Login.module.css"
import { useState, useRef } from "react";
import { useNavigate, Form, useActionData, redirect } from "react-router-dom";

const emailRegex = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/"

export async function action({request}) {
  const data = await request.formData()
    console.log("Sumitting data: ", data.get("email"))
    const formToJSON = {};
    for (const [key, value] of [...data.entries()]) {
      formToJSON[key] = value;
    }
    try {
      const result = await fetch(
          'http://localhost:5000/login',
          {
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formToJSON)
          }
      )
      console.log("Status: ", result.status)
      if (result.status === 200) {
        console.log("inside if with success")
        const response = await result.json()
        console.log("Response: ", response)
        const token = response.token
        console.log("Login successful", token)
        localStorage.setItem('token', token)
        
        return redirect("/home")
      } else {
        // return redirect()
        console.log("Login fail")
        return {message: 'Login Fail', status: result.status}
      }
    } catch (err) {
      return {message: "Server not responding", status: 500}
    }

  }

export default function Login() {
  const data = useActionData();
  const navigate = useNavigate();
  const isErrorDisplayed = useRef(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [editForm, setEditForm] = useState ({
    email: false,
    password: false,
  })


  if (data) isErrorDisplayed.current = true

  function handleNavigation() {
    navigate("/signup")
  }

  function resetFormData() {
    isErrorDisplayed.current = false
    setFormData({
      email: '',
      password: ''
    })
  }

  const isEmailInvalid = editForm.email && !formData.email.toString().includes('@')

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevValue => ({
      ...prevValue,
      [name]: value,
    }))
    setEditForm(prevValue => ({
      ...prevValue,
      [name]: false
    }))
  }

  function handleReset(event) {
    resetFormData()
  }

  function handleBlur(event) {
    const {name, value} = event.target
    setEditForm(prevValue => ({
      ...prevValue,
      [name]: true
    }))
  }

  return (
      <div className={style.container}>
        <h1 className={style.a}>Login</h1>
        <div className={style.loginContainer}>
          <Form className={style.form} method="post" action="/login">
            <div className={style.field}>
              <label className={style.loginLabel} htmlFor="email">Email</label>
              <input type="email" name="email" label="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email" autoComplete="off"/>
            </div>
            <div>
              {isEmailInvalid && <p>Enter valid email</p>}
            </div>
            <div className={style.field}>
              <label className={style.loginLabel} htmlFor="password">Password</label>
              <input type="password" name="password" label="password" value={formData.password} onChange={handleChange} onBlur={handleChange} placeholder="Password" autoComplete="off"/>
            </div>
            <div className={style.loginButton}>
              <button className={style.submitButton}>Submit</button>
              <button className={style.submitButton} type="reset" onClick={handleReset}>Reset</button>
              <button className={style.submitButton} type="button" onClick={handleNavigation}>Sign-Up</button>
            </div>
          </Form>
          <div>
            {isErrorDisplayed && data && data.message && <p className={style.errorValue}>{data.message}</p>}
          </div>
        </div>
      </div>
  )
}