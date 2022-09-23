import './App.css';

import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';


function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <Routes>
            <Route path="/connect" component={<Homepage />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
