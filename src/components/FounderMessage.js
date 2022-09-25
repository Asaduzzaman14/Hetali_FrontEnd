import React from 'react';
import founderImage from '../assates/image 8.png'

const FounderMessage = () => {
    return (
        <div>
            <h2>Founder’s Message</h2>
            <img src={founderImage} alt="" />
            <h2>Mr. Jayesh H. Pandya</h2>
            <p>“When a customer buys a home, he is giving up a major chunk of his life's savings to do so. It is imperative to give him exactly what he looks for in his home.”</p>
            <div>
                <p>
                    We bring to our clients much wanted human values, integrity, trust and an assurance of responsibility all coupled with our expertise in construction, engineering & management. Our biggest assets have always been our small but highly trained team of professional managers and engineers who are backed by a very able team of administrators. We have a clear vision about building on our strengths and our achievements while holding dear to us our basic principles
                </p>
            </div>
        </div>
    );
};

export default FounderMessage;