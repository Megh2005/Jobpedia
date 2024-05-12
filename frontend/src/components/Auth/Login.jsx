import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section>
      <div className="content">
        <img src="/error.png" alt="error" />
        <Link to={"/"}>Return Home</Link>
      </div>
    </section>
  )
}

export default Login