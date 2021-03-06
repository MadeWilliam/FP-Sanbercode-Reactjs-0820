import React from 'react'
import { Switch, Route } from 'react-router'
import Index from '../Tugas-2/Index'
import About from '../Tugas-2/About'
import Login from './Login'
import Editor from './Editor'
import Logout from './Logout'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Index />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/editor">
                <Editor />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/logout">
                <Logout />
            </Route>
        </Switch>
    )
}

export default Routes;