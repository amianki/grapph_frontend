import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      
        <div className="container">
          <h1 className="display-4">My App</h1>
          
        </div>
      
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
