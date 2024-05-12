import React from 'react';
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <section className='page notfound'>
      <div className="content">
        <img src="/error.png" alt="Error" />
        <Link to={"/"}>Return Home</Link>
      </div>
    </section>
  )
}

export default Error