import { Link } from "react-router-dom";
import './UserLogout.css';

const UserLogout = () => {
    localStorage.removeItem('token');
    return (
        <div className='user-logout'>
            <div className='user-logout-msg'>You has been logged out successfully.Please Login again to use our service.
            </div>
            <div>
                <Link to='/'><button type='submit' className='btn-Home'>Click to go Home</button></Link>
            </div>
        </div>
    );
}

export default UserLogout;