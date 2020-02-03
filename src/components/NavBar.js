import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/registration">SignUp</Link></li>
            </ul>
        </div>
    )
}
