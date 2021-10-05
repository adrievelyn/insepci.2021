import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Badge from './Components/Badge';


function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/badge" component={Badge} />
           
          </Switch>
        </div>
      </Router>
      
    </div>

   
  );
}

export default App;
