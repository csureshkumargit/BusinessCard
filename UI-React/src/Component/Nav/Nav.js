import { Link } from 'react-router-dom'
import './Nav.css'
import logo from '../../Images/Logo.JPG';
const Nav = () => {
    return (
        <div className='nav-container'>
            <div className='navigation'>
                <div className='nav-item-brand logo'>
                    <Link to='/'><img src={logo} className='img-logo' alt={logo} /></Link>
                </div>
                <div className='nav-item-menu'>
                    <div className='nav-item Login'>
                        <Link to='/login' className='nav-item-links'>Login</Link>
                    </div>
                    <div className='nav-item Register'>
                        <Link to='/register' className='nav-item-links'>Register</Link>
                    </div>
                    <div className='nav-item Register'>
                        <Link to='/logout' className='nav-item-links'>Logout</Link>
                    </div>
                    <div className='nav-item create'>
                        <Link to='/create' className='nav-item-links'>Create</Link>
                    </div>
                    <div className='nav-item view'>
                        <Link to='/view' className='nav-item-links'>View</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;