import React from 'react';
import play from '../assets/images/play.svg'
import run from '../assets/images/run.svg'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
 

function SingleProject({ id, name, desc, tags, code, demo, image}) {

    return (
        <div>
            <div
                key={id}
                className='singleProject'
                style={{ backgroundColor:'#84b6f4'}}
            >
                <div className='projectContent'>
                    <h2
                        style={{ color: 'black' }}
                    >
                        {name}
                    </h2>
                    <img className= 'ImageProyect' src={image} alt={name} />
                    <div className='project--showcaseBtn'>
                        <NavLink to={demo} >
                            <img src={play} />
                        </NavLink>
                        
                        <NavLink to={code}>
                            <img src={run}/>                            
                        </NavLink>
                    </div>
                </div>
                <p
                    className='project--desc'
                    style={{
                        background: 'black',
                        color: 'white',
                    }}
                >
                    {desc}
                </p>
                <div
                    className='project--lang'
                    style={{
                        background: 'black',
                        color: 'white',
                    }}
                >
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SingleProject;
