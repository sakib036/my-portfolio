import React from 'react';

import Typed from 'react-typed';
import myImage from '../../../Assets/myImagehome.png'

const Home = () => {
    return (
        <div className=' bg-black grid grid-cols-1  sm:grid-cols-2 h-screen mb-12'>

            <div className='relative w-full h-full'>
                <div className=' bg-gradient-to-t from-violet-500 to-fuchsia-500 w-1/2 sm:w-3/4 h-full' style={{ clipPath: 'polygon(0 0, 64% 0, 100% 100%, 0% 100%)' }}>
                </div>
                <img className='absolute rounded-full border-2 w-full bottom-0 sm:rounded-none sm:border-0' src={myImage} alt="" />
            </div>

            <div className='flex p-6 items-center bg-black text-white'>
            <div>
            <h1 className='text-3xl sm:text-5xl font-bold'>I am A <span className='text-violet-500'>
            <Typed
                    strings={["Web Developer"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop 
                />
                </span>           
           </h1>
          
           <p className='pr-12 my-6'>Find the perfect web designer for your website. I am a web designer and front-end developer on crafting clear and user friendly experience.</p>
            </div>

            </div>
        </div>
    );
};

export default Home;