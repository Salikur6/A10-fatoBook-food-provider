import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const navigate = useNavigate();
    const { id, img, name, price, description } = service;
    return (
        <>
            <div className='col-lg-4 col-md-6'>
                <Card className='service-card border-0' style={{ borderRadius: '40px ' }}>

                    <Card.Img variant="top" className='w-100' style={{ height: '295px', borderRadius: '40px 40px 0 0' }} src={img} />
                    <Card.Body>
                        <Card.Title className='fw-bolder'>{name}</Card.Title>
                        <h6 className='fw-bold'>Price: {price}</h6>
                        <Card.Text className='fw-bold'>
                            {description}
                        </Card.Text>

                        <div className='text-center'>  <Button className='my-2 fw-bold' onClick={() => navigate(`/service/${id}`)} variant="warning">CheckOut</Button></div>



                    </Card.Body>
                </Card>
            </div >
        </>
    );
};

export default Service;