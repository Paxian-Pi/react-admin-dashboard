import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContextProvider';
import { currentUserActionIsLogin } from '../features/authSlice';

function Navbar() {
    const { isLoginPage } = useSelector((state) => state.auth.value);

    const handleLogout = (e) => {
        e.preventDefault();
    }

    const [toLogin, setToLogin] = useState('')
    const [toSignup, setToSignup] = useState('')

    const dispatch = useDispatch()

    const { user, logout } = useAuth()
    console.log(user)


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

    const onLinkClickHandler = () => {
        logout()
    }


    const authLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link onClick={onLinkClickHandler} className="nav-link" to={'/'}>Logout</Link>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                {toSignup && <Link onClick={() => dispatch(currentUserActionIsLogin(false))} className="nav-link" to={'/'}>{toSignup}</Link>}
            </li>
            <li className="nav-item">
                {toLogin && <Link onClick={() => dispatch(currentUserActionIsLogin(true))} className="nav-link" to={'/register'}>{toLogin}</Link>}
            </li>
        </ul>
    );

    const darkBg = 'navbar-dark'
    const ttransparentBg = 'navbar-transparent'

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
                    {user ? authLinks : guestLinks}
                </div>
            </div>
        </nav>

        // <div className="main-panel" id="main-panel">
        //     <nav className="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
        //         <div className="container-fluid">
        //             <div className="navbar-wrapper">
        //                 <div className="navbar-toggle">
        //                     <button type="button" className="navbar-toggler">
        //                         <span className="navbar-toggler-bar bar1"></span>
        //                         <span className="navbar-toggler-bar bar2"></span>
        //                         <span className="navbar-toggler-bar bar3"></span>
        //                     </button>
        //                 </div>
        //                 <a className="navbar-brand" href="#pablo">Dashboard</a>
        //                 {user ? authLinks : guestLinks}
        //             </div>
        //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-bar navbar-kebab"></span>
        //                 <span className="navbar-toggler-bar navbar-kebab"></span>
        //                 <span className="navbar-toggler-bar navbar-kebab"></span>
        //             </button>
        //             {user && <div className="collapse navbar-collapse justify-content-end" id="navigation">
        //                 <form>
        //                     <div className="input-group no-border">
        //                         <input type="text" value="" className="form-control" placeholder="Search..." />
        //                         <div className="input-group-append">
        //                             <div className="input-group-text">
        //                                 <i className="now-ui-icons ui-1_zoom-bold"></i>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </form>
        //                 <ul className="navbar-nav">
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#pablo">
        //                             <i className="now-ui-icons media-2_sound-wave"></i>
        //                             <p>
        //                                 <span className="d-lg-none d-md-block">Stats</span>
        //                             </p>
        //                         </a>
        //                     </li>
        //                     <li className="nav-item dropdown">
        //                         <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                             <i className="now-ui-icons location_world"></i>
        //                             <p>
        //                                 <span className="d-lg-none d-md-block">Some Actions</span>
        //                             </p>
        //                         </a>
        //                         <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
        //                             <a className="dropdown-item" href="#">Action</a>
        //                             <a className="dropdown-item" href="#">Another action</a>
        //                             <a className="dropdown-item" href="#">Something else here</a>
        //                         </div>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#pablo">
        //                             <i className="now-ui-icons users_single-02"></i>
        //                             <p>
        //                                 <span className="d-lg-none d-md-block">Account</span>
        //                             </p>
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </div>}
        //         </div>
        //     </nav>
        // </div>


    )
}

export default Navbar