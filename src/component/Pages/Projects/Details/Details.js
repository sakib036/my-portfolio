import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from './Detail';


const Details = () => {
    let { id } = useParams();
    
    const [projectDetails,setProjectDetails]=useState([]);
   

   useEffect( ()=>{
    fetch('projects.json')
        .then(res=>res.json())
        .then(data=>setProjectDetails(data))
   } ,[])

    const projectDetail = projectDetails.filter(project => project.id === id);
   

    return (
        <div>
            {
                projectDetail.map((project)=><Detail key={project.id} project={project}></Detail>)

            }
        </div>
    );
};

export default Details;