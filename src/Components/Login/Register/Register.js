import { XCircleIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import auth from '../../../Firebase.init';
import Loading from '../../Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        name: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        name: '',
        others: ''
    });


    const from = location.state?.from?.pathname || "/";
    const handleEmail = e => {
        const validEmail = /\S+@\S+\.\S+/.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: '' })
        } else {
            setErrors({ ...errors, email: 'Invalid Email' })
        }
    }


    const handlePassword = e => {
        const validPassword = /.{6,}/.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: '' })
        } else {
            setErrors({ ...errors, password: 'Minimum 6 Characters!' });
            setUserInfo({ ...userInfo, password: '' });
        }
    }

    const handleName = e => {
        const validName = /^(?![\s.]+$)[a-zA-Z\s.]*$/.test(e.target.value);
        if (validName) {
            setUserInfo({ ...userInfo, name: e.target.value });
            setErrors({ ...errors, name: '' });
            console.log(userInfo.name)
        } else {
            setErrors({ ...errors, name: 'Put a Valid Full Name' })
            setUserInfo({ ...userInfo, name: '' });
        }
    }

    const [
        createUserWithEmailAndPassword,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = e => {
        e.preventDefault();


        if (userInfo.email && userInfo.name && userInfo.password) {
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
            navigate(from, { replace: true });
            setErrors({ ...errors, others: '' })
        } else {
            setErrors({ ...errors, others: 'Fill All Input' })
        }

    }


    return (
        <div className='container'>
            <div style={{ height: '100px' }}></div>
            <h1 className='text-center text-primary fw-bold'>Please Register to Continue</h1>

            <Form className='w-75 mx-auto my-5' onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label className='fw-bold'>Your Name</Form.Label>
                    <Form.Control onChange={handleName} type="text" placeholder="Your Name" />

                    {errors?.name && <p className='fw-bold text-danger'> <XCircleIcon style={{ height: '15px', width: '15px', marginRight: '4px' }}></XCircleIcon>{errors.name}</p>}
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" required />

                    {errors?.email && <p className='fw-bold text-danger'> <XCircleIcon style={{ height: '15px', width: '15px', marginRight: '4px' }}></XCircleIcon>{errors.email}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control onChange={handlePassword} type="password" placeholder="Password" required />


                    {errors?.password && <p className='fw-bold text-danger'> <XCircleIcon style={{ height: '15px', width: '15px', marginRight: '4px' }}></XCircleIcon>{errors.password}</p>}
                </Form.Group>

                {errors?.others && <p className='fw-bold text-danger'> <XCircleIcon style={{ height: '15px', width: '15px', marginRight: '4px' }}></XCircleIcon>{errors.others}</p>}

                <Button variant="primary" type="submit" className='fw-bold'>
                    Register
                </Button>
                {loading && <Loading></Loading>}
            </Form>

            <p className='fw-bold text-center my-5 fs-5'>Already have an account, <Link to='/login'>Click to Login</Link></p>

            <ToastContainer className='fw-bold' />
        </div>
    );
};

export default Register;