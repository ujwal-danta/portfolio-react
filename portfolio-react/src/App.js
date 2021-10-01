
import './App.css';
import Menu from './components/Menu';
import About from './components/About'
import Homepage from './components/Homepage'
import Contact from './components/Contact'
import Projects from './components/Projects'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route path="/" exact>
      <Homepage/>
      </Route>
      <Route path="/projects">
      <Projects/>
      </Route>
      <Route path="/about-me">
      <About/>
      </Route>
      <Route path="/contact-me">
      <Contact/>
      </Route>
    </Switch>
    </BrowserRouter>
   </>
  );
}

export default App;
