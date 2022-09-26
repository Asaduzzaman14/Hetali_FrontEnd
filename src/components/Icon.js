import React from 'react';
import logoImg from '../assates/path834.png'

const Icon = () => {
    return (
        <div className=' mx-auto  mt-12 mb-5 flex justify-center items-center  '>
            <div className=' before '></div>
            <img className='images mx-auto' src={logoImg} alt="" />
            <div className=' after '></div>
        </div>
    );
};

export default Icon;