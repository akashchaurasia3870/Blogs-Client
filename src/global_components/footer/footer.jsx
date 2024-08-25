import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <ul className="footer_category">
                <li><Link to='/'>Spider-Man</Link></li>
                <li><Link to='/'>Iron-Man</Link></li>
                <li><Link to='/'>Bat-Man</Link></li>
                <li><Link to='/'>Spider-Man</Link></li>
                <li><Link to='/'>Iron-Man</Link></li>
                <li><Link to='/'>Bat-Man</Link></li>
                <li><Link to='/'>Spider-Man</Link></li>
                <li><Link to='/'>Iron-Man</Link></li>
                <li><Link to='/'>Bat-Man</Link></li>
            </ul>
            <div className="footer_copyright">
                <small>All Rights Reserved &copy; Copyright, Akash Chaurasia.</small>
            </div>
        </footer>
    )
}

export default Footer