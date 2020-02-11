import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <ul style={{display: 'flex', justifyContent: 'flex-start', listStyleType: 'none' , backgroundColor: 'pink', margin: 0}}>
                <li style={{padding: "20px"}}><NavLink exact activeStyle={{background: 'green', color: 'white', padding: '20px'}} to="/">Home</NavLink></li>
                <li style={{padding: "20px"}}><NavLink exact activeStyle={{background: 'green', color: 'white', padding: '20px'}} to="/about">About</NavLink></li>
                <li style={{padding: "20px"}}><NavLink exact activeStyle={{background: 'green', color: 'white', padding: '20px'}} to="/contact">Contact</NavLink></li>
                <li style={{padding: "20px"}}><NavLink exact activeStyle={{background: 'green', color: 'white', padding: '20px'}} to="/crud-firebase">Crud Firebase</NavLink></li>
                <li style={{padding: "20px"}}><NavLink exact activeStyle={{background: 'green', color: 'white', padding: '20px'}} to="/firebase-file-upload">Image Upload</NavLink></li>
                <li style={{padding: "20px"}}><NavLink exact activeStyle={{background: 'green', color: 'white', padding: '20px'}} to="/firebase-image-list">Image List</NavLink></li>
                <li style={{padding: "20px"}}><NavLink exact activeStyle={{background: 'green', color: 'white', padding: '20px'}} to="/registration">SignUp</NavLink></li>
            </ul>
        </div>
    )
}
