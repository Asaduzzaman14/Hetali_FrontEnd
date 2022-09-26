import React from 'react';
import misionImage from "../assates/sean-pollock-PhYq704ffdA-unsplash 1.png"
import Icon from './Icon';

const Mission = () => {
    return (
        <div>
            <h2 className='text-center mt-10 mb-12 font-normal text-3xl h-12  text/[#474747] font-serif'>Mission</h2>

            <Icon />
            <div className='mt-16 grid grid-cols-2 justify-items-center'>
                <div>
                    <img src={misionImage} alt="" />
                </div>


                <div className='grid gap-2'>

                    <div class="card shadow-lg bg-primary text-primary-content">
                        <div class="p-3">
                            <h2 class="card-title">Personalised</h2>
                            <p>You have 3 unread messages. Tap here to see.</p>
                        </div>
                    </div>
                    <div class="card shadow-lg bg-primary text-primary-content">
                        <div class="p-3">
                            <h2 class="card-title">Committed</h2>
                        </div>
                    </div>
                    <div class="card shadow-lg bg-primary text-primary-content">
                        <div class="p-3">
                            <h2 class="card-title">Quality & Service Oriented</h2>
                        </div>
                    </div>
                    <div class="card shadow-lg bg-primary text-primary-content">
                        <div class="p-3">
                            <h2 class="card-title">Timely </h2>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Mission;