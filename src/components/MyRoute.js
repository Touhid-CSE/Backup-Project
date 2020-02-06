import React from 'react'
import {Route, Switch} from 'react-router-dom'
import RegForm from './pages/registration/RegForm'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import CrudFirebase from './pages/CrudFirebase'

export default function MyRoute() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/registration" component={RegForm}/>
                <Route path="/crud-firebase" component={CrudFirebase}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    )
}
