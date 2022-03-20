import './App.css';
import Start from './components/Start';
import { Routes, Link, Route } from "react-router-dom"
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Info from './pages/Info';


function App() {

  return (

    <div>
    <Start />
    <div className='bar'>
        <Link to='/profile' className='link-element logo' ></Link>
        <Link to='/' className='link-element'  > Home </Link>
        <Link to='/projects' className='link-element' > Projects </Link>
        <Link to='/info' className='link-element' > Info </Link>
        <Link to='/contact-me' className='link-element'> Contact me </Link>
    </div>
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/info' element={ <Info /> } />
        <Route path='/contact-me' element={ <Contact /> } />
        <Route path='/profile' element={ <Profile /> } />
    </Routes>

    </div>

  );
}

export default App;
