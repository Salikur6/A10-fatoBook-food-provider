import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <>
            <div style={{ height: '50px' }}></div>


            <div className='container my-5'>

                <div className=' mb-5'>
                    <h2 className='text-center fw-bold'>Services</h2>
                    <div className='d-flex justify-content-center'>
                        <div className='bg-danger' style={{ height: '2px', width: '20%' }}></div>
                    </div>
                    <div className='d-flex justify-content-center mt-1'>
                        <div className='bg-danger' style={{ height: '2px', width: '15%' }}></div>
                    </div>
                    <div className='d-flex justify-content-center mt-1'>
                        <div className='bg-danger' style={{ height: '2px', width: '10%' }}></div>
                    </div>
                </div>

                <div className="row g-5">
                    {services.map(service => <Service key={service.id} service={service}></Service>)}
                </div>
            </div>
        </>
    );
};

export default Services;