import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout'
import Home from './components/home/home'
function App() {
  return (
    <Routes>
      <Route>
        <Route path="/Personal-Portfolio" element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
