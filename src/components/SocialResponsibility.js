import React from 'react';
import socialImage from "../assates/sean-pollock-PhYq704ffdA-unsplash 1 (1).png"
import Icon from './Icon';



const SocialResponsibility = () => {
    return (
        <div>
            <h2 className='text-center mt-12 mb-8 font-normal text-3xl h-12  text/[#474747] font-serif'>Corporate Social Responsibility</h2>

            <Icon></Icon>
            <div className='grid grid-cols-2 gap-5'>
                <div className='h-96   w-auto'>
                    <h3 className='mt-5 font-bold text-2xl mb-3 '>Education for the under-privileged</h3>
                    <p className='mt-5 text-xl color-[#474747]'>We believe that our future lies in the holistic educational foundation of the youth and we have nurtured that cause by providing the necessary books and monetary support to the under-privileged children of Mumbai & also at several villages in Gujarat. As the Trustees of the H A Desai Boarding School in Matunga, Mumbai, we have been providing living and hospitality services to the academically bright students from the weaker monetary sections of the society.
                    </p>
                    <div className='grid gap-2 mt-10'>

                        <div class="card shadow-lg bg-primary text-primary-content">
                            <div class="p-3">
                                <h2 class="card-title">Support for Rural Farmers</h2>
                            </div>
                        </div>
                        <div class="card shadow-lg bg-primary text-primary-content">
                            <div class="p-3">
                                <h2 class="card-title">Spiritual</h2>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <img src={socialImage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default SocialResponsibility;
