import React from 'react';

const Project = ({ project }) => {
    const { projectName, title, projectImg } = project;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-96 w-full' src={projectImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> Project Name: {projectName}</h2>
                <p>{title}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;