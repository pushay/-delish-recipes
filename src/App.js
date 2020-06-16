import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Routing'
import './Sass/main.scss'
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar/>
        <Routing/>
      </div>
    </Router>
  );
}

export default App;
