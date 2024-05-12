import React from 'react'
import { Context } from '../../main'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaGithub } from 'react-icons/fa'
import { useContext } from 'react'

const Footer = () => {
  const { isAuthorized } = useContext(Context)
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"} >
      <div>&copy; All Rights Reserved By Megh Deb</div>
      <div>
        <Link to={"https://mailto:greenguardiansg@gmail.com"} target="_blank">
          <FaEnvelope />
        </Link>
        <Link to={"https://github.com/Megh2005"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://www.linkedin.com/in/megh-deb"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://wa.me/+918910729279"} target="_blank">
          <FaWhatsapp />
        </Link>
      </div>
    </footer>
  )
}

export default Footer