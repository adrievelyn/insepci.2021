import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Badge from './Components/Badge';


function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/badge" component={Badge} />
           
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
