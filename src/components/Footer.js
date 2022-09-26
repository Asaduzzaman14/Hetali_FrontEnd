import React from 'react';
import hetaliIcon from '../assates/hetali logo_final_29.7 1 (1).png'
import Icon from './Icon';


const Footer = () => {
    return (

        <div className=' bg-[#004A74]'>
            <div className='flex justify-around pb-10 pt-8 text-white'>
                <img className='pl-20' src={hetaliIcon} alt="" />


                <div className='grid grid-cols-3 gap-5'>
                    <ul>

                        <h2 className='text-sm font-semibold'>Quick Links</h2>
                        <li className='text-sm font-light'>Contact Us</li>
                        <li className='text-sm font-light'>About Us</li>
                        <li className='text-sm font-light'>Testimonial</li>
                        <li className='text-sm font-light'>Gallery</li>
                        <li className='text-sm font-light'>Site Map</li>
                    </ul>
                    <ul>

                        <h2 className='text-sm font-semibold'>Flats in Mumbai</h2>
                        <li className='text-sm font-light'>1BHK Andheri West</li>
                        <li className='text-sm font-light'>2 BHK Andheri West</li>
                        <li className='text-sm font-light'>3 BHK Andheri West</li>
                        <li className='text-sm font-light'>1BHK Goregaon East</li>
                        <li className='text-sm font-light'>2BHK Goregaon East</li>
                    </ul>
                    <ul>

                        <h2 className='text-sm font-semibold'>Projects in Mumbai</h2>
                        <li className='text-sm font-light'>Ongoing</li>
                        <li className='text-sm font-light'>Upcoming</li>
                        <li className='text-sm font-light'>Completed</li>
                        <li className='text-sm font-light'>Hetali Blessings</li>
                        <li className='text-sm font-light'>Hetali Anuchhaya</li>
                    </ul>
                </div>
            </div>

            <p className='text-primary pb-10 text-center '>Copyright ©  2022 Hetali Enterprises - All Rights Reserved.</p>

        </div>
    );
};

export default Footer;