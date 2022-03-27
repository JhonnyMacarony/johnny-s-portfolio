import React from 'react'
import "./ContactIcon.css"
import { Link } from "react-router-dom"

const ContactIcon = () => {
  return (
    <>
      <Link to='/contact-me'>
        <div className='animated'>
          <p className='logo-icon' />
          <p className='p0'> Contact me </p>
        </div>
      </Link>
    </>
  )
}

export default ContactIcon