import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/paper-dashboard.css';
// import './assets/js/core/jquery.min.js';
// import './assets/js/core/pepper.min.js';
// import './assets/js/core/bootstrap.min.js';
// import './assets/js/plugins/perfect-scrollbar.jquery.min.js';
// import './assets/demo/demo.js';

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
