import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    let year = new Date().getFullYear();
    return (
        <>
            <div className='pt-5' style={{ backgroundColor: '#0d1117', color: '#58a6ff' }}>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-4">
                            <h5 className='text-white my-3'>Pages</h5>
                            <div>
                                <ul>
                                    <li className='py-1 fw-bold'><Link style={{ color: '#58a6ff' }} className='text-decoration-none' to='/'>Home</Link></li>
                                    <li className='py-1 fw-bold'><Link style={{ color: '#58a6ff' }} className='text-decoration-none' to='/services'>Services</Link></li>
                                    <li className='py-1 fw-bold'><Link style={{ color: '#58a6ff' }} className='text-decoration-none' to='/checkout'>Checkout</Link></li>
                                    <li className='py-1 fw-bold'><Link style={{ color: '#58a6ff' }} className='text-decoration-none' to='/blogs'>Blogs</Link></li>
                                    <li className='py-1 fw-bold'><Link style={{ color: '#58a6ff' }} className='text-decoration-none' to='/about'>About Me</Link></li>
                                    <li className='py-1 fw-bold'><Link style={{ color: '#58a6ff' }} className='text-decoration-none' to='/login'>Login</Link></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <h5 className='text-white my-3'>Social Media</h5>

                            <div>
                                <ul>
                                    <li className='py-1 fw-bold'><a style={{ color: '#58a6ff' }} className='text-decoration-none' href="https://www.facebook.com/Salikur/">Facebook</a></li>
                                    <li className='py-1 fw-bold'><a style={{ color: '#58a6ff' }} className='text-decoration-none' href="https://github.com/Salikur6" target="_blank" rel="noopener noreferrer">Github</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">

                            <h5 className='text-white my-3'>Legal</h5>

                            <div>
                                <ul>
                                    <li className='py-1 fw-bold'><Link style={{ color: '#58a6ff' }} className='text-decoration-none' to='/login'>Privacy Policy</Link></li>
                                    <li className='py-1 fw-bold'><Link style={{ color: '#58a6ff' }} className='text-decoration-none' to='/login'>Licensing</Link></li>
                                    <li className='py-1 fw-bold'><Link style={{ color: '#58a6ff' }} className='text-decoration-none' to='/login'>Terms & Conditions</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div style={{ backgroundColor: '#374151', color: 'white' }}>
                <div className='container text-center'>
                    <div className="row">
                        <p className='py-2 pt-3'>&#169; {year} FatoBook. All Rights Reserved By <a className='text-decoration-none ms-1 fw-bold' href="https://github.com/Salikur6" target="_blank" rel="noopener noreferrer">Salikur Islam </a></p>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Footer;