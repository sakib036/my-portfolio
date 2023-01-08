import React, { useEffect, useState } from 'react';
import Project from './Project/Project';
// import sshMobile from '../../Assets/Projects/ssh-mobile.png'
// import perfectEngineering from '../../Assets/Projects/perfect-engineering.png'
// import topTechedu from '../../Assets/Projects/top-techedu.png'


const Projects = () => {

    const [projects,setProjects]=useState([]);

    useEffect( ()=>{
        fetch('projects.json')
        .then(res=>res.json())
        .then(data=>{
            setProjects(data)
        })
    },[])

    // const projects=[
    //     {
    //         projectName:"ssh-mobile",
    //         title:"ssh-mobile which is second hand mobile resell website. ",
    //         projectImg: sshMobile,

    //     },
    //     {
    //         projectName:"perfect-engineering",
    //         title:"perfect-engineering for individual work service.  ",
    //         projectImg:perfectEngineering,

    //     },
    //     {
    //         projectName:"top-techedu",
    //         title:"top-techedu which is online training base website. ",
    //         projectImg: topTechedu,

    //     },
    // ]


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-12'>
            {
                projects.map((project,index)=><Project key={index} project={project}></Project>)
            }
            
        </div>
    );
};

export default Projects;