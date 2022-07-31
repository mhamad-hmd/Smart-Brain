import React from 'react';
import Tilt from 'react-tilt'
import Brain from './Brain.png';
import './Logo.css'


const Logo = () => {
    return (
        <div className='m-5 mt-0'>
            {/* we imported this tilt function from a library  */}
            <Tilt className="Tilt rounded-md shadow-2xl" options={{ max: 55 }} style={{ height: 130, width: 130 }} >
                <div className="Tilt-inner">
                    {/* we implemented our Logo in the funtion */}
                    <img alt='Logo' className='p-7 ' src={Brain} width = '200px'  />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo