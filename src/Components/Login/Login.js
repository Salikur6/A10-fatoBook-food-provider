import { XCircleIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        others: ''
    })

    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || "/";

    useEffect(() => {

        if (googleUser || signInUser) {
            navigate(from, { replace: true });
        }
    })


    const [
        signInWithEmailAndPassword,
        signInUser,
        signInLoading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, resetPasswordError] = useSendPasswordResetEmail(auth);


    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);



    useEffect(() => {
        if (signInError || resetPasswordError) {
            toast(signInError?.message)
        }
    }, [signInError, resetPasswordError])



    const handleEmail = e => {
        const validEmail = /\S+@\S+\.\S+/.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: '' })
        } else {
            setErrors({ ...errors, email: 'Invalid Email' });
            setUserInfo({ ...userInfo, email: '' })
        }
    }

    const handlePassword = (e) => {
        const validPassword = /.{6,}/.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: '' })
        } else {
            setErrors({ ...errors, password: 'Minimum 6 Characters!' })
            setUserInfo({ ...userInfo, password: '' })
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(userInfo.email, userInfo.password);

    }

    const handleGoogle = () => {
        signInWithGoogle()
    }




    const handleResetButton = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);

            toast('Sent email')
        } else {
            toast('Put a Email')
        }

    }



    return (
        <div className='container'>
            <div style={{ height: '100px' }}></div>
            <h1 className='text-center fw-bold text-primary'>Please Register to Continue</h1>

            <Form className='w-75 mx-auto my-5' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" required />

                    {errors?.email && <p className='fw-bold text-danger'> <XCircleIcon style={{ height: '15px', width: '15px', marginRight: '4px' }}></XCircleIcon>{errors.email}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePassword} type="password" placeholder="Password" required />

                    {errors?.password && <p className='fw-bold text-danger'> <XCircleIcon style={{ height: '15px', width: '15px', marginRight: '4px' }}></XCircleIcon>{errors.password}</p>}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {signInLoading && <Loading></Loading>}
            </Form>

            <div className='mx-auto w-75'>
                <p className='fw-bold'>If you don't have an account, <Link to='/register'>Click on Register</Link></p>
                <p className='fw-bold'>Forget Password? <span style={{ cursor: 'pointer' }} className='text-primary' onClick={handleResetButton}>Reset Password</span></p>
            </div>

            <div className='d-flex align-items-center mx-auto w-50 mt-5'>
                <div className='w-50 bg-danger' style={{ height: '2px' }}></div>
                <p className='mt-2 mx-1'>or</p>
                <div className='w-50 bg-danger' style={{ height: '2px' }}></div>


            </div>
            <div className='w-50 mx-auto text-center'>

                {googleError?.message && <p className='fw-bold text-danger'> <XCircleIcon style={{ height: '15px', width: '15px', marginRight: '4px' }}></XCircleIcon>{googleError.message}</p>}
                {googleLoading && <Loading></Loading>}
                <button className='btn btn-danger my-3 fw-bold' onClick={handleGoogle}>Sign in with Google</button>

            </div>
            <ToastContainer className='fw-bold' />
        </div>
    );
};

export default Login;