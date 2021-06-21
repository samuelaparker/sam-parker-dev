import * as React from 'react'
import { Link } from 'gatsby'
import { navLinks, navLinkItem, navLinkText } from '../components/nav.module.css'

const Nav = () => {
    return (
        <nav>
            <ul className={navLinks}>
                <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
            </ul>
        </nav>
    )
}


export default Nav