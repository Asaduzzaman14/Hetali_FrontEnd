import React from 'react';
import icon1 from '../assates/Vector.png'
import icon2 from '../assates/Vector (1).png'
import icon3 from '../assates/Vector (2).png'
import icon4 from '../assates/Vector (3).png'
import background from '../assates/giorgio.jpg'


const Services = () => {

    const datas = [
        {
            img: icon1,
            description: "Our track record has been impeccable with project completion on time and have surpassed expectations many a time, society members have positively received our redevelopment plans and encourage our modern and urbane designs to their neighbours. "
        },
        {
            img: icon2,
            description: "The Hetali Group is a redeveloper like no other with a profound focus on quality and long term satisfaction of its residents."
        },
        {
            img: icon3,
            description: "They just don't endeavour but build homes which make it's residents proud of their address by putting home-owners at the heart and soul of everything they do from start to finish and post completion.            "
        },
        {
            img: icon4,
            description: "Hetali Group lives by the ethos of building homes to live and not houses to stay in."
        },
    ]




    return (
        <div style={{
            background: `url(${background})`,

        }}
            className="" >
            <div className='bg-white opacity-90'>

                <div className='order-2'>
                    <p className='font-extrabold text-2xl mx-auto text-center italic mt-16 mb-10 w-9/12'>We endeavour to build homes which make it's residents happy and proud of their address. Residents are at heart of everything we do, we build homes to live in, not houses to stay in.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mx-auto px-20'>
                    {
                        datas.map((data) => {
                            return <div className='w-[440px] h-[354px] m-3 shadow-xl px-8 py-5 mx-auto'>
                                <img className='mx-auto' src={data.img} alt="" />
                                <p>{data.description}</p>
                            </div>
                        })
                    }
                </div>
                <div className=' bg-black/80 w-100 h-40'>

                </div>

                <div className=''>
                    <p className='mx-auto my-10  text-2xl  text-justify  w-[850px] h-[570px] text-[#474747] '>Established in 1992, Hetali Group is a leading real estate developer of residential spaces across Mumbai and have earned an unmatched reputation amongst its very loyal customers. The company's customer-centric values, project management proficiency and technical expertise are amplified with over 6.5 lakh sq.ft. built and almost 1 lakh sq.ft underway leading to more than families!
                        <br />
                        <br />
                        <br />

                        The Hetali Group promises a lifestyle second to none. In a span of over four decades, the group has proved to be one of the most reputed real estate builders in the western suburbs of Mumbai with residences in prime locations such as Andheri, Goregaon, Vile Parle and Juhu.
                        <br />
                        <br />
                        <br />
                        Spearheaded by Mr Jayesh Pandya, the company's central ideology is to provide homes customized to the customer's requirements and home’s that are superior in nature keeping in mind the needs of the modern home user.

                    </p>
                </div>
            </div>

        </div >
    );
};

export default Services;