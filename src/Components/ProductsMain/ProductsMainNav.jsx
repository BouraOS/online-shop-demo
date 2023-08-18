import React from 'react'
import { Link } from 'react-router-dom'
export default function ProductsMainNav() {
    
    // Toggle Active Class 
    const filter_items = document.querySelectorAll(".products-filter_nav li")
    function removeActive() {
        filter_items.forEach((item) => {
            item.classList.remove("active")
        })
    }
    // Add Active
    const ToggleActive = (e) => {
        removeActive()
        e.currentTarget.classList.add("active")
    }

    return (
        <ul className="products-filter_nav">
            <li className="active" onClick={ToggleActive}><Link to="" >All Products</Link></li>
            <li onClick={ToggleActive}><Link to="?tagName=great_deals" >Popular</Link></li>
            <li onClick={ToggleActive}><Link to="?tagName=newest" >Newest</Link></li>
            <li onClick={ToggleActive}><Link to="?tagName=best_sellers" >Best Selling</Link></li>
        </ul>
    )
}
