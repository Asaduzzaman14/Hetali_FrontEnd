import React from 'react';
import Banner from './Banner';
import Companies from './Companies';
import Footer from './Footer';
import FounderMessage from './FounderMessage';
import Mission from './Mission';
import Services from './Services';
import SocialResponsibility from './SocialResponsibility';
import Vision from './Vision';

const Home = () => {
    return (
        <div className='w-[1200px] mx-auto px-6'>
            <Banner />
            <Services />
            <Vision />
            <Mission />
            <SocialResponsibility />
            <FounderMessage />
            <Companies />
            <Footer />


        </div>
    );
};

export default Home;