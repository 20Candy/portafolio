import React,{ useContext} from 'react';
import { projectsData } from '../data/projectsData'
import SingleProject from './SingleProject';

function Projects() {

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: 'white'}}>
                    <div className="projects--header">
                        <h1 style={{color: 'black'}}>Projects</h1>
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
