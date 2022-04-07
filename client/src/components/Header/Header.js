import React from 'react'
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
    useNavigate,
    Link,
    matchRoutes,
} from "react-router-dom"
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'
import NavBar from './NavBar'

export default function Header() {
    return (
        <Router>
            <NavBar />
        </Router>
    )
}