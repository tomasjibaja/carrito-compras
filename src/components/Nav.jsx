import React from 'react'
import { IoBag } from "react-icons/io5";
import './Nav.css'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

  const navigate = useNavigate();

  return (
    <nav>
      <div className="logo pointer" onClick={() => navigate('/')}>
        <IoBag />
        <h1>Kint-A-Mart</h1>
      </div>
    </nav>
  )
}

export default Nav
