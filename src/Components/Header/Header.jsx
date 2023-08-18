import "./header.css"
import { NavLink } from 'react-router-dom'

export default function Header() {

  const ToogleMenu = () => {
    const navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
  }

  return (
  <header>
    <div className="top-header">
        <label className="navbar-brand">Boura<span>OS</span></label>
        <nav className='navbar'>
          <ul className="navbar-links">
            <li className="nav-link" ><NavLink to="/">Home</NavLink></li>
            <li className="nav-link" ><NavLink to="/products">Products</NavLink></li>
            <li className="nav-link" ><NavLink to="/about">About</NavLink></li>
          </ul>
          <form className="search" role="search">
            <input type="search" className="form-control " placeholder="Search..."/>
          </form>
        </nav>
        <div className="right-header">
          <button type='button' className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="cart-notification">
                  +2
              </span>
          </button>
          <button type="button" className="btn signup-btn">Sign-up</button>
          <div className='bar-menu ms-3' onClick={ToogleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
  </header>
  )
}
