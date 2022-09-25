import React from 'react';
import founderImage from '../assates/image 8.png'

const FounderMessage = () => {
    return (
        <div>
            <h2 className='text-center mt-10 mb-12 font-normal text-3xl h-12  text/[#474747] font-serif'>Founder’s Message</h2>

            <div className=' mx-auto border-2 border-rose-500 w-[280px] h-[280px] rounded-full '>
                <img className='mx-auto rounded-full  ' src={founderImage} alt="" />
            </div>

            <div className=' flex justify-center'>
                <div>

                    <h2 className='text-center mt-10 mb-12 font-normal text-3xl h-12  text/[#474747] font-serif'>Mr. Jayesh H. Pandya</h2>
                    <p className='w-[600px] font-semibold text-lg  leading-5 italic '>“When a customer buys a home, he is giving up a major chunk of his life's savings to do so. It is imperative to give him exactly what he looks for in his home.”</p>
                    <p className='text-justify  mt-10 mb-5 w-[850px] text-sm text-[#474747] '>
                        We bring to our clients much wanted human values, integrity, trust and an assurance of responsibility all coupled with our expertise in construction, engineering & management. Our biggest assets have always been our small but highly trained team of professional managers and engineers who are backed by a very able team of administrators. We have a clear vision about building on our strengths and our achievements while holding dear to us our basic principles
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FounderMessage;