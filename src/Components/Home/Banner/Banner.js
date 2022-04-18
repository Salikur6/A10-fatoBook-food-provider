import React from 'react';
import banner1 from '../../../images/banner1.jpg'
import png1 from '../../../images/1.png'
import png2 from '../../../images/2.png'
import dalivaryBoy from '../../../images/daliveryboy.png'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className='position-relative'>

                <div className='main'>
                    <img style={{ height: '95vh' }} className='w-100 banner1' src={banner1} alt="" />


                </div>
                <div>
                    <img style={{ maxWidth: '80px', left: '80px', top: '70%' }} className='position-absolute position-absolute png1' src={png1} alt="" />
                </div>

                <div>
                    <img style={{ maxWidth: '80px', left: '150px', top: '20%' }} className='position-absolute position-absolute png2' src={png2} alt="" />
                </div>

                <div>
                    <img style={{ maxWidth: '350px', right: '7%', bottom: '0' }} className='position-absolute position-absolute png2' src={dalivaryBoy} alt="" />
                </div>


            </div>


            <div style={{ top: '30%' }} className='container position-absolute text-white'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-3 col-md-3"></div>
                        <div className="col-lg-6 col-md-8 col-12  ">
                            <h2 className='banner-title fw-bold'>home food catering</h2>
                            <h2 className='banner-title fw-bold'>Free Delivery Within an Hour</h2>

                            <p className='banner-p'>A restaurant or an eatery, is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many.
                            </p>
                            <button className='btn btn-warning'>Order Now</button>

                        </div>
                        <div className="col-lg-3 col-md-3">

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;