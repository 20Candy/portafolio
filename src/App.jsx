import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/proyects/">
            <Proyects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
        </Switch>
      </BrowserRouter>
    </AnimatePresence>
  
  </>
}

export default App