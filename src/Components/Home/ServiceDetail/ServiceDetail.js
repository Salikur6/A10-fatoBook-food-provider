import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import './ServiceDetail.css'

const ServiceDetail = () => {
    const [checked, setChecked] = useState(false);


    let params = useParams();
    const { serviceId } = params;
    console.log(params)

    const handleSubmit = (event) => {
        event.preventDefault();
    }



    return (
        <div className='bg-dark'>
            <div className='container p-5'>
                <div style={{ height: '100px' }}></div>
                <h2 className='text-white text-center fw-bold'>this is service No: {serviceId}</h2>

                <Form onSubmit={handleSubmit} className='my-4 checkout-form w-50 mx-auto'>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label className='fw-bold'>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label className='fw-bold'>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St, Apartment, studio, or floor" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label className='fw-bold'>Phone</Form.Label>
                        <Form.Control type='tel' name='phone' maxLength="13" placeholder='Enter Phone Number' required />
                    </Form.Group>



                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check className={checked ? 'text-primary fw-bold' : 'fw-bold text-danger'} onClick={() => setChecked(!checked)} type="checkbox" label="Accept Terms and Conditions" />
                    </Form.Group>

                    <Button className='fw-bold d-block mx-auto' disabled={!checked} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div >
        </div>
    );
};

export default ServiceDetail;