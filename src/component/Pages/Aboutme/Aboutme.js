import React from 'react';
import myImage from '../../Assets/N-27217.jpg'

const Aboutme = () => {
    return (
        <div>
            <div className="hero bg-base-200 my-20">
                <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                        <div className="text-center lg:text-left">
                            <img className='rounded-md' src={myImage} alt="" />
                        
                    </div>
                        </div>
                    </div>
                   
                        <div className="card-body">
                        <div className="text-center lg:text-justify sm:px-10">
                        <h1 className="text-5xl font-bold">About Me</h1>
                        <p className="py-6">My name is Md. Nazmus Sakib. I am a Full Stack Web Developer. A highly motivated and hardworking to learn web development around one year. I complete Web Development course in Programming Hero. I believe that good design is based on thorough research and a firm understanding of what the client wants. It's about bringing design and technology together to create a site that not only has style and substance, but also changes how clients do business online. </p>
                    </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;