import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <h1>header</h1>

        <div>
             <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>



    </div>
  )
}

export default Header