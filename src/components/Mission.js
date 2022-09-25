import React from 'react';
import misionImage from "../assates/sean-pollock-PhYq704ffdA-unsplash 1.png"

const Mission = () => {
    return (
        <div>
            <h2 className='text-center mt-10 mb-12 font-normal text-3xl h-12  text/[#474747] font-serif'>Mission</h2>

            <div className='grid grid-cols-2 justify-items-center'>
                <div>
                    <img src={misionImage} alt="" />
                </div>


                <div>
                    <div class="card shadow-md bg-primary text-primary-content">
                        <div class="card-body shadow-2xl shadow-cyan-500">
                            <h2 class="card-title">Notification 1</h2>
                            <p>You have 3 unread messages. Tap here to see.</p>
                        </div>
                    </div>
                    <div class="card shadow bg-primary text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">Notification 2</h2>
                            <p>You have 3 unread messages. Tap here to see.</p>
                        </div>
                    </div>
                    <div class="card shadow-sm bg-primary text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">Notification 3</h2>
                            <p>You have 3 unread messages. Tap here to see.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Mission;