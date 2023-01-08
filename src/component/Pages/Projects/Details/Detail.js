import React from 'react';
import { Carousel } from 'react-carousel-minimal';



const Detail = ({ project }) => {
    console.log(project)
    const { projectName,images, title, server_site, live_site, client_site, technology, details, projectImg} = project;

    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

    //   console.log(data)


    return (
        <div>
            <div className="bg-gray-200 py-10">
            <Carousel
            data={images}
            time={4000}
            width="850px"
            
          
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
             
            }}
            
          />

            </div>
            <div className='text-center'>
                <h1 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Project Name: {projectName}</h1>
                <div className='flex justify-center my-10 font-bold'>
                    <h2 className='underline underline-offset-8 decoration-wavy decoration-sky-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'><a href={live_site} target="_blank" rel="noreferrer"> Live Site Link</a></h2>
                    <h2 className='underline underline-offset-8 decoration-wavy decoration-sky-400 mx-32 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '><a href={client_site} target="_blank" rel="noreferrer"> Client Site Link</a></h2>
                    <h2 className='underline underline-offset-8 decoration-wavy decoration-sky-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'><a href={server_site} target="_blank" rel="noreferrer"> Server Site Link</a></h2>
                </div>




            </div>
            <div className='text-xl'>
                {
                    details.map(detailed => <li>{detailed.note}</li>)
                }
                <h2 className='font-bold text-center my-10'>Technology Used: {technology}</h2>
            </div>

        </div>
    );
};

export default Detail;