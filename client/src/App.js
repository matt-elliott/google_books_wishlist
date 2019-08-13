import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Jumbo from './components/Jumbotron';
import Index from './components/pages/Index' ;
import Saved from './components/pages/Saved' ;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Jumbo />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
