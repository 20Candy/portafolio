import React from 'react';
import play from '../assets/images/play.svg'
import run from '../assets/images/run.svg'

function SingleProject({ id, name, desc, tags, code, demo, image,color}) {

    return (
        <div>
            <div
                key={id}
                className='singleProject'
                style={{ backgroundColor:color}}
            >
                <div className='projectContent'>
                    <h2>
                        {name}
                    </h2>
                    <img className= 'ImageProyect' src={image} alt={name} />
                    <div className='project--showcaseBtn'>
                        <a href={demo} >
                            <img src={play} />
                        </a>
                        
                        <a href={code}>
                            <img src={run}/>                            
                        </a>
                    </div>
                </div>

                <p className='project--desc' >
                    {desc}
                </p>

                <div className='project--lang'>

                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SingleProject;
