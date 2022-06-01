import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import YinYang from '../assets/images/yinyan.jpg'
import Intro from './Intro'

import SocialIcons from '../components/SocialIcons'


const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '50%' :'50%'  };
left: ${props => props.click ? '65%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
z-index: 3;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
    border-radius:50%
}

&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const SKILLS = styled(NavLink)`
    color: ${props => props.click ? 'white' : 'black'};
`

const WORK = styled(NavLink)`
    color: ${props => props.click ? 'white' : 'black'};
`

const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className='MainContainer'>

            <DarkDiv   click={click}/>

            <SocialIcons  click ={click}/>

            <Center click={click}>
                <img src={YinYang}  onClick={()=> handleClick()}  width={click ? 150 : 200} height={click ? 150 : 200}/>
                <span>click here</span>
            </Center>
           
            <NavLink className="Proyects" to="/proyects">
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1, color: "#84b6f4"}}
                whileTap={{scale: 0.9}}
                >
                    Proyects
                </motion.h2>
            </NavLink>
            
            <WORK className="Work" to="/work" click={+click}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1, color: '#50c4ad'}}
                whileTap={{scale: 0.9}}
                >
                    Work
                </motion.h2>
            </WORK>


            <NavLink className="About" to="/about">
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1, color: "#af82ba"}}
                whileTap={{scale: 0.9}}
                >
                    About.
                </motion.h2>
            </NavLink>

            <SKILLS  className= "Skills" to="/skills"  click={+click}>
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1, color: "#e4747c"}}
                whileTap={{scale: 0.9}}
                >
                    My Skills.
                </motion.h2>
            </SKILLS>

            {click ? <Intro click={click} /> : null }

        </div>
    )
}

export default Main
