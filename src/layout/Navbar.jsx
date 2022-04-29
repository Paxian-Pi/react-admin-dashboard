import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { currentUserActionIsLogin } from '../features/authSlice';

function Navbar() {
    const { user, isLoginPage } = useSelector((state) => state.auth.value);

    const handleLogout = (e) => {
        e.preventDefault();
    }

    const [toLogin, setToLogin] = useState('')
    const [toSignup, setToSignup] = useState('')

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(currentUserActionIsLogin(false))
    // }, [])

    useEffect(() => {
        if (isLoginPage) {
            setToLogin('')
            setToSignup('Already have an account: Log In')
        }
        else {
            setToLogin('Crate an account: Sign Up')
            setToSignup('')
        }
    }, [isLoginPage])


    const authLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={'/feed'}>Post Feed</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/dashboard'}>Dashboard</Link>
            </li>
            <li className="nav-item">
                <a href="#" onClick={handleLogout} className="nav-link" >
                    <img
                        className='rounded-circle'
                        src={user.avatar}
                        alt={user.name}
                        style={{ width: '25px', marginRight: '5px' }}
                        title='A Gravatar connected to your email will display an image!'
                    />
                    Logout
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link onClick={() => dispatch(currentUserActionIsLogin(false))} className="nav-link" to={'/'}>{toSignup}</Link>
            </li>
            <li className="nav-item">
                <Link onClick={() => dispatch(currentUserActionIsLogin(true))} className="nav-link" to={'/register'}>{toLogin}</Link>
            </li>
        </ul>
    );

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>React Admin</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mobile-nav">
                    {/* <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/profiles'}>
                                Developers
                            </Link>
                        </li>
                    </ul> */}
                    {guestLinks}
                </div>
            </div>
        </nav>
    )
}

export default Navbar