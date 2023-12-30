import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout'
import Home from './components/home/home'
import About from './components/about/about'
function App() {
  return (
    <Routes basename="/Personal-Portfolio">
        <Route path="/Personal-Portfolio" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Route>
    </Routes>
  );
}

export default App;
