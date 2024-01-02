import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout'
import Home from './components/home/home'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Contact from './components/contact/contact'

function App() {
  return (
    <Routes basename="/Personal-Portfolio">
        <Route path="/Personal-Portfolio" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="skills" element={<Skills/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
    </Routes>
  );
}

export default App;
