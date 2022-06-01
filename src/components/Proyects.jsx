import React from 'react';
import { projectsData } from '../data/projectsData'
import SingleProject from './SingleProyect';

function Projects() {

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" >
                    <div className="projects--header">
                        <h1>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectsData.map(project => (
                                <SingleProject
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                    color={project.color}
                                />
                            ))}
                        </div> 
                    </div>
                </div>
            )}

        </>
    )
}

export default Projects
