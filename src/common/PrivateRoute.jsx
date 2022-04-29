import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthContextProvider';

const PrivateRoute = ({ children }) => {

    const { user } = useAuth()

    const isAuthenticated = useSelector((state) => state.auth.value.isAuthenticated);

    return user ? children : <Navigate to='/' />;
}

export default PrivateRoute