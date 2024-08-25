import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img1 from '../../assets/img/img1.jpg'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

function Header() {

    let nevigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        nevigate('/signin');
    }
    return (
        <nav className='nav_container w-full'>

            <Link to="/" className='nav_logo '>
                <img src={img1} alt="Logo" className='rounded-lg' />
            </Link>

            <ul className="nav_menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/create_blog">Create Blog</Link></li>
                <li><Link to="/authors">Authors</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/signin">SignIn</Link></li>
                <li onClick={() => { handleLogout() }}><Link to="/signout">SignOut</Link></li>
            </ul>

            <button className="nav_toggle_btn">
                <GiHamburgerMenu />
                <MdClose />
            </button>

        </nav>

    )
}

export default Header
