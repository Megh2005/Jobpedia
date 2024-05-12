import React, { useContext, useState } from 'react'
import { Context } from '../../main'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:4000/user/logout", { withCredentials: true })
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login")
    } catch (error) {
      toast.error(error.data.message);
      console.log(error)
      setIsAuthorized(true);
    }
  }
  return (
    <>
      <nav >
        <div className={isAuthorized ? "navbarShow" : "navbarHide"}>
          <div className="logo">
          </div>
          <ul className={!show ? "menu" : "show-menu menu"}>
            <li>
              <Link to={"/"} onClick={() => setShow(false)}>Home</Link>
            </li>
            <li>
              <Link to={"/job/getall"} onClick={() => setShow(false)}>All Jobs</Link>
            </li>
            <li>
              <Link to={"/applications/me"} onClick={() => setShow(false)}>
                {user && user.role === "Recruiter" ? "Applicant's Posts" : "My Posts"}
              </Link>
            </li>
            {user && user.role === "Recruiter" ? (
              <>
                <li>
                  <Link to={"/job/post"} onClick={() => setShow(false)}>Post Job</Link>
                </li>
                <li>
                  <Link to={"/job/me"} onClick={() => setShow(false)}>View Jobs</Link>
                </li>
              </>
            ) : (
              <>
              </>
            )}
            <button onClick={handleLogout}>Logout</button>
          </ul>
          <div className='hamburger'>
            <GiHamburgerMenu onClick={() => setShow(!show)} />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar