import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../app/methods';
import TextFieldGroup from '../common/TextFieldGroup'
import { getErrors } from '../features/errorSlice';
import ShowModalSingleAction from '../common/ShowModalSingleAction'
import { useAuth } from '../context/AuthContextProvider';
import GoogleButton from 'react-google-button';

const Login = () => {

    const emailInput = useRef();
    const passwordInput = useRef();

    const errors = useSelector((state) => state.error.value)

    const dispatch = useDispatch()

    const { login, googleSignIn } = useAuth()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    console.log(errors)

    const onCLickHandler = (e) => {
        // e.preventDefault()
        googleSignIn()
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const user = {
            email: emailInput.current.value,
            password: passwordInput.current.value
        }

        console.log(user)

        login(user.email, user.password)

        // loginUser(user.email, user.password, dispatch)
        // dispatch(getErrors({}))
    }

    const [show, setShow] = useState(false);

    const handleClose = () => {
        // setShow(false)
        dispatch(getErrors(''))
    }

    useEffect(() => setShow(true), [show])

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
                        <h1 className="display-4 text-center">Log In</h1>
                        <p className="lead text-center">Sign in to your account</p>
                        <form onSubmit={submitHandler}>

                            <TextFieldGroup
                                placeholder='Email Address'
                                type='email'
                                name='email'
                                refInput={emailInput}
                            // error={errors}
                            />

                            <TextFieldGroup
                                placeholder='Password'
                                type='password'
                                name='password'
                                refInput={passwordInput}
                            // error={errors}
                            />

                            <input type="submit" className="btn btn-info btn-block mt-4" />
                            <br />
                            <p className='text-center'>OR</p>
                            <GoogleButton onClick={onCLickHandler} className='m-auto ' />                            

                            {showModal}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login