import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1 style={{textAlign:"left"}}>Contact</h1>
        <div className="icons"
        data-aos="zoom-in-up"
                data-aos-duration="1000"
        >
          <a href='https://www.instagram.com' target='_blank' className="icon ">
          <FaInstagram className='mainIcon' />
          </a>
          <a href='https://www.facebook.com' target='_blank' className="icon">
            <FaFacebook className='mainIcon'/>
          </a>
          <a href='https://www.github.com' target='_blank' className="icon">
            <FaGithub className='mainIcon'/>
          </a>
          <a href='mailto:www.vivekraj9852@gmail.com' target='_blank' className="icon">
            <CgMail className='mainIcon'/>
          </a>
          <a href='https://www.linkedin.com' target='_blank' className="icon">
            <FaLinkedin className='mainIcon'/>
          </a>
        </div>
      </div>
      
    </>
  )
}

export default Contact
