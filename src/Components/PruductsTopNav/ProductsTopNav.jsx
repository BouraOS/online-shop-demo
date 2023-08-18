import { NavLink } from 'react-router-dom'

export default function ProductsTopNav() {
  return (
    <nav className='single-product-nav mb-3'>
        <ol>
          <li><NavLink to="/">Home</NavLink></li>
          <li><i className="fa-solid fa-angle-right"></i></li>
          <li><NavLink to="/products">All products</NavLink></li>
        </ol>
    </nav>
  )
}
