import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";

// pages
import Home from './components/Home'
import About from './components/About'
import Proyects from './components/Proyects'
import Skills from './components/Skills'
import Work from './components/Work'
import SoundBar from './components/SoundBar'

function App() {
  return <>

    <SoundBar />
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element ={<About/>} ></Route>
          <Route path="/proyects/" element ={<Proyects />} ></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/work" element ={<Work />} ></Route>
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  
  </>
}

export default App