import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Github from '../assets/images/github.svg'
import Linkedin from '../assets/images/linkedin.svg'
import WhatsApp from '../assets/images/whatsapp.svg'

const ICON = styled.img`
    filter: ${(props) => (props.click ? 'invert(100%)' : 'invert(0)')};
`

const LINE = styled(motion.span)`
width: 2px;
height: 8rem;
background-color:black;
filter: ${(props) => (props.click ? 'invert(100%)' : 'invert(0)')};
`

function SocialIcons(props) {
    const { click } = props

    return (
        <div className="Icons">
            <motion.div
              initial={{ transform: 'scale(0)' }}
              animate={{ scale: [0, 1, 1.5, 1] }}
              transition={{ type: 'spring', duration: 1, delay: 1 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: 'https://github.com/20Candy' }}>
                    <ICON src={Github} width={25} height={25} click={click} />
                </NavLink>
            </motion.div>
            <motion.div
              initial={{ transform: 'scale(0)' }}
              animate={{ scale: [0, 1, 1.5, 1] }}
              transition={{ type: 'spring', duration: 1, delay: 1.4 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: 'https://www.linkedin.com/in/carol-ar%C3%A9valo/' }}>
                    <ICON src={Linkedin} width={25} height={25} click={click} />
                </NavLink>
            </motion.div>
            <motion.div
              initial={{ transform: 'scale(0)' }}
              animate={{ scale: [0, 1, 1.5, 1] }}
              transition={{ type: 'spring', duration: 1, delay: 1.6 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: 'https://api.whatsapp.com/send?phone=50244232007&text=Hello!%20' }}>
                    <ICON src={WhatsApp} width={25} height={25} click={click} />
                </NavLink>
            </motion.div>

            <LINE
              click={props.click}
              initial={
                    {
                        height: 0,
                    }
                }
              animate={{
                    height: '120px',
                }}
              transition={{
                    type: 'spring', duration: 1, delay: 0.8,
                }}
            />
        </div>
    )
}

export default SocialIcons
