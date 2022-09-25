import React from 'react';
import socialImage from "../assates/sean-pollock-PhYq704ffdA-unsplash 1.png"



const SocialResponsibility = () => {
    return (
        <div>
            <h2 className=' mt-10 font-normal text-3xl h-12  text-[#474747] font-serif'> Corporate Social Responsibility</h2>

            <div className='grid grid-cols-2'>
                <div>
                    <h3>Education for the under-privileged</h3>
                    <p>We believe that our future lies in the holistic educational foundation of the youth and we have nurtured that cause by providing the necessary books and monetary support to the under-privileged children of Mumbai & also at several villages in Gujarat. As the Trustees of the H A Desai Boarding School in Matunga, Mumbai, we have been providing living and hospitality services to the academically bright students from the weaker monetary sections of the society.
                    </p>
                    <span>Support for Rural Farmers</span>
                    <span>Spiritual</span>
                </div>
                <div>
                    <img src={socialImage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default SocialResponsibility;
