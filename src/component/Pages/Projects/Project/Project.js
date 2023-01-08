import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { projectName, title, projectImg,id } = project;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-96 w-full' src={projectImg} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title"> Project Name: {projectName}</h2>
                <p>{title}</p>
                <div className="card-actions justify-end">
                   <Link to={`/${id}`}> <button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Project;