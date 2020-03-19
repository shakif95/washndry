import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SignIn, SignUp } from './components/auth';
import { Dashboard } from './components/dashboard/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
