import React from 'react';
import groupCompanysImage1 from "../assates/image 3.png"
import groupCompanysImage2 from "../assates/image 5.png"
import groupCompanysImage3 from "../assates/image 9.png"

const Companies = () => {
    return (
        <div>
            <h2>Group Companies</h2>
            <div>
                <img src={groupCompanysImage1} alt="" />
                <img src={groupCompanysImage2} alt="" />
                <img src={groupCompanysImage3} alt="" />

            </div>
        </div>
    );
};

export default Companies;