import Navbar  from "../Navbar/Navbar.js"
import css from './Header.module.css'
import SearchBar from "../Search/SearchBar.js"

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