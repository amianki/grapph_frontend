import logo from './logo.svg';
import './App.css';
// import Card from './Card';
import Home from './components/Home';
import Add from './components/Add';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Edit from './components/Edit';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/update' element={<Update />} />
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Add />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
