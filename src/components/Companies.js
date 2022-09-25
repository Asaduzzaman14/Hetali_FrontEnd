import React from 'react';
import groupCompanysImage1 from "../assates/image 3.png"
import groupCompanysImage2 from "../assates/image 5.png"
import groupCompanysImage3 from "../assates/image 9.png"

const Companies = () => {
    return (
        <div>
            <h2 className='text-center mt-10 mb-12 font-normal text-3xl h-12  text/[#474747] font-serif'>Group Companies</h2>

            <div className='grid grid-cols-3'>
                <img src={groupCompanysImage1} alt="" />
                <img src={groupCompanysImage2} alt="" />
                <img src={groupCompanysImage3} alt="" />

            </div>
        </div>
    );
};

export default Companies;