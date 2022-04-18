import React from 'react';
import banner1 from '../../../images/banner1.jpg'
import png1 from '../../../images/1.png'
import png2 from '../../../images/2.png'

const Banner = () => {
    return (
        <>
            <div className='position-relative'>

                <div>
                    <img style={{ height: '85vh' }} className='w-100' src={banner1} alt="" />

                </div>
                <div>
                    <img style={{ maxWidth: '80px', left: '80px', top: '70%' }} className='position-absolute position-absolute png1' src={png1} alt="" />
                </div>

                <div>
                    <img style={{ maxWidth: '80px', left: '150px', top: '20%' }} className='position-absolute position-absolute png2' src={png2} alt="" />
                </div>
            </div>

        </>
    );
};

export default Banner;