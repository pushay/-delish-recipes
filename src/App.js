import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Routing'
import Sidebar from './Sidebar/Sidebar';
import './Sass/main.scss'

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
