import React from 'react';
import bannerIcon from "../assates/path834.png"
import bannerImage from "../assates/happy-parents-laughing-together-with-daughter 2.png"
import Icon from './Icon';
import '../Custom.css'

const Banner = () => {
    return (
        <div>
            <div className='text-center'>
                <h2 className=' mt-10 font-normal text-3xl h-12  text/[#474747] font-serif'>About Us</h2>
                <div>
                    <Icon />
                    {/* <img className='mx-auto mt-12 mb-5' src={bannerIcon} alt="" /> */}
                </div>
            </div>

            <div>
                <img src={bannerImage} alt="" />
            </div>

        </div>
    );
};

export default Banner;