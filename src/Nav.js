import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <ul className='nav-list'>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>
            <li><Link to="/logout">logout</Link></li>
            <li><Link to="/profile">profile</Link></li>
        </ul>
    </div>
  )
}

export default Nav