import Navbar  from "../Navbar/Navbar.js"
import css from './Header.module.css'
<<<<<<< HEAD
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
    useNavigate,
    Link,
    matchRoutes,
} from "react-router-dom"
import Home from '../../pages/Home/Home'
import Dashboard from '../../pages/Dashboard/Dashboard'
import Contact from '../../pages/Contact/Contact'

=======
import SearchBar from "../Search/SearchBar.js"
>>>>>>> main

export default function Header(props) {
    return (
        <header>
            <div className="headerInfo">
                <h1>Art Store</h1>
<<<<<<< HEAD
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Navigate replace to='/Home' />} />
                        <Route path='/Home' component={Home} />
                        <Route path='/Dashboard' component={Dashboard} />
                        <Route path ='/Contact' component={Contact} />
                    </Routes>
                </Router>
=======
                <Navbar />
            <SearchBar />
>>>>>>> main
            </div>
        </header>
    )
}