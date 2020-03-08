import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {

    const [toggoleControl, setToggoleControl] = useState({display: ""})
    // const [width, setWidth] = useState(window.innerWidth)

    // React.useEffect(() => {
    //     const handleResize = () => setWidth(window.innerWidth)
    //     window.addEventListener('resize', handleResize)
    //     return () => {
    //         window.removeEventListener('resize', handleResize)
    //     };
    // })

    const handleToggleButtonClick = () => {
       
        toggoleControl.display ==='none' ?  

            setToggoleControl({display : "flex"}) 
        :  
            setToggoleControl({display : "none"})

       
      
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <NavLink className="link-item" exact activeStyle={{}} to="/">Vecto Pixel</NavLink>
            </div>
            <a href onClick={handleToggleButtonClick} className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links" style={toggoleControl}>
                <ul>
                    <li><NavLink className="link-item" exact activeStyle={{}} to="/">Home</NavLink></li>
                    <li><NavLink className="link-item" exact activeStyle={{}} to="/about">About</NavLink></li>
                    <li><NavLink className="link-item" exact activeStyle={{}} to="/contact">Contact</NavLink></li>
                    <li><NavLink className="link-item" exact activeStyle={{}} to="/crud-firebase">Crud</NavLink></li>
                    <li><NavLink className="link-item" exact activeStyle={{}} to="/firebase-file-upload">Upload</NavLink></li>
                    <li><NavLink className="link-item" exact activeStyle={{}} to="/firebase-image-list">Images</NavLink></li>
               
                </ul>
            </div>
        </nav>
    )
}
