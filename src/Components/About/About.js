import React from 'react';
import salikur from '../../images/salikur1.jpeg'

const About = () => {
    return (
        <div>
            <div style={{ height: '120px' }}></div>
            <div style={{}} className='container my-5 pt-5'>
                <div style={{ justifyContent: ' space-around' }} className="row g-5 align-items-center">
                    <div className="col-lg-7 order-2">
                        <h2>I'm <span className='fw-bold text-primary '>Salikur Islam</span></h2>
                        <p style={{ lineHeight: '28px', fontSize: '17px' }} className='fw-bold my-3'>
                            I am working hard with a strong desire to become a junior web developer in the next few months. My goal is to see myself as a Frontend, MERN Stack Developer! in 2022. After finish this web-development learning i will focus on getting a job on Software industry, where I will be able to perform in any kind of situation with full effort to utilize my knowledge, skill, and experience for professional career development..</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-8 order-1">
                        <img style={{ borderRadius: '50%' }} className='my-img w-100' src={salikur} alt="" />
                    </div>
                </div>
            </div>
            <div style={{ height: '30vh' }}></div>
        </div>
    );
};

export default About;