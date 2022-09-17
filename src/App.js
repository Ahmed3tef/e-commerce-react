import { Home, Categories } from './pages';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import { Footer } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories/*' element={<Categories />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
