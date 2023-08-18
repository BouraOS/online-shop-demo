import React from 'react'
import "./singleProduct.css"
import { NavLink } from 'react-router-dom'

export default function ProductNav({prodName}) {
  return (
    <nav className='single-product-nav'>
        <ol>
            <li><NavLink to="/">Home</NavLink></li>
            <li><i className="fa-solid fa-angle-right"></i></li>
            <li><NavLink to="/products">All products</NavLink></li>
            <li><i className="fa-solid fa-angle-right"></i></li>
            <li><p>{prodName}</p></li>
        </ol>
    </nav>
  )
}
