import { Home, Categories } from './pages';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/categories/*' element={<Categories />} />
    </Routes>
  );
}

export default App;
