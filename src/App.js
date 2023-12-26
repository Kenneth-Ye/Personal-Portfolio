import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout'
function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
