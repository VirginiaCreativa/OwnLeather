import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/router';

const App = () => (
  <div className="App">
    <Router>
      <Routes />
    </Router>
  </div>
);
export default App;
