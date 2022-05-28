import React,{ useState } from 'react';
import Marquee from "react-fast-marquee";
import styled from 'styled-components'
import skillsData  from '../data/skillsData'
import ProgressBar from 'react-bootstrap/ProgressBar'

function Skills() {
    const [current, setCurrent] = useState("");

    
    function DescriptionDiv(skill){

        if(skill !== ""){    
            return(
                <div style={{backgroundColor: skill.color}}className='Description'>
                    <h1>{skill.name}</h1>
                    <ProgressBar now={60}/>
                    <img src={skill.img}></img>
                </div>
            )

        }
    }


    return (
        <div className="skills">
            <div className="skillsHeader">
                <h2 style={{color: 'white'}}>Skills</h2>
            </div>
            <button className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        
                    {skillsData.map((skill) => {
                        return(

                        <div className="skill--box skillBoxStyle" key={skill.id} style={{backgroundColor: skill.color}} onMouseOver={()=> setCurrent(skill)} onMouseOut={()=> setCurrent("")}>
                            <img src={(skill.img)} alt={skill} /> 
                            <h3 style={{color: 'black'}}>
                                {skill.name}
                            </h3>

                        </div>

                        )
                    })}

                    </Marquee>
                </div>
                {DescriptionDiv(current)}
            </button>
        </div>

    )
}

export default Skills
