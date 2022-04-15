import Navbar  from "../Navbar/Navbar.js"
import css from './Header.module.css'
import Home from '../../pages/Home/Home'
import Dashboard from '../../pages/Dashboard/Dashboard'
import Contact from '../../pages/Contact/Contact'
import SearchBar from '../../components/Search/SearchBar'


export default function Header(props) {
    return (
        <header>
            <div className="headerInfo">
                <h1>Art Store</h1>
                <Navbar />
                <SearchBar />
            </div>
        </header>
    )
}