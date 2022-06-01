import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

// pages
import Home from './components/Home'
import About from './components/About'
import Proyects from './components/Proyects'
import Skills from './components/Skills'
import Work from './components/Work'
import SoundBar from './components/SoundBar'

function App() {
    return (
        <>

            <SoundBar />
            <AnimatePresence exitBeforeEnter>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/proyects/" element={<Proyects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/work" element={<Work />} />
                    </Routes>
                </BrowserRouter>
            </AnimatePresence>

        </>
    )
}

export default App
