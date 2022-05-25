import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Github from '../assets/images/github.svg'
import Linkedin from '../assets/images/linkedin.svg'
import WhatsApp from '../assets/images/whatsapp.svg'

const SocialIcons = () => {
    return (
        <div className='Icons'>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://github.com/20Candy"}}>
                    <img src ={Github} width={25} height={25} />
                </NavLink>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.4}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://www.linkedin.com/in/carol-ar%C3%A9valo/"}}>
                    <img src ={Linkedin} width={25} height={25} />
                </NavLink>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://api.whatsapp.com/send?phone=50244232007&text=Hello!%20"}}>
                    <img src ={WhatsApp} width={25} height={25} />
                </NavLink>
            </motion.div>

            <motion.span className='Line'

                initial={
                    {
                    height:0
                    }
                }
                animate={{
                    height: '8rem'
                }}
                transition={{
                    type:'spring', duration:1, delay:0.8
                }}

            ></motion.span>
        </div>
    )
}

export default SocialIcons
