import React from 'react'
import { Link } from 'react-router-dom'

const UserNav = () => {
    return (
        <>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to='/user/history' className='nav-link'>History</Link>
                </li>
                <li className="nav-item">
                    <Link to='/user/password' className='nav-link'>Password Reset</Link>
                </li>
                <li className="nav-item">
                    <Link to='/user/wishlist' className='nav-link'>Wishlist</Link>
                </li>
            </ul>

        </>
    )
}

export default UserNav