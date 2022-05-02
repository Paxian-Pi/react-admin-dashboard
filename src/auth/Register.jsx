import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../app/methods';
import ShowModalSingleAction from '../common/ShowModalSingleAction';
import TextFieldGroup from '../common/TextFieldGroup';
import { useAuth } from '../context/AuthContextProvider';
import { getErrors } from '../features/errorSlice';

const Register = () => {
    const emailInput = useRef();
    const passwordInput = useRef();

    // const user = useSelector((state) => state.auth.value.user)

    const errors = useSelector((state) => state.error.value)

    console.log(errors)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const { user, signup } = useAuth()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    console.log(user)

    const submitHandler = (event) => {
        event.preventDefault();

        const newUser = {
            email,
            password
        }

        console.log(newUser)
        signup(newUser.email, newUser.password)

        // registerUser(newUser.email, newUser.password, dispatch, navigate)
        // dispatch(getErrors({}))
    }

    const [show, setShow] = useState(false);

    const handleClose = () => dispatch(getErrors(''))

    useEffect(() => setShow(true), [])

    let showModal;

    if (errors) {
        showModal = (
            <ShowModalSingleAction
                show={show}
                title='Error'
                body={errors}
                handler={handleClose}
            />
        )
    }

    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Register</h1>
                        <p className="lead text-center">Sign up OR Login if you already have an account</p>
                        <form onSubmit={submitHandler}>

                            <TextFieldGroup
                                placeholder='Email Address'
                                type='email'
                                name='email'
                                refInput={emailInput}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                // error={errors}
                            />

                            <TextFieldGroup
                                placeholder='Password'
                                type='password'
                                name='password'
                                refInput={passwordInput}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                // error={errors}
                            />

                            {showModal}

                            <input type="submit" className="btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register