import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/paper-dashboard.css';
import './App.css';
// import './assets/js/core/jquery.min.js';
// import './assets/js/core/pepper.min.js';
// import './assets/js/core/bootstrap.min.js';
// import './assets/js/plugins/perfect-scrollbar.jquery.min.js';
// import './assets/demo/demo.js';

import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import { SignIn, SignUp } from './components/auth';
import { Dashboard, Appointments, Bookings } from './components/dashboard';
import { store, history } from './store';
import { ConnectedRouter } from 'connected-react-router';

function App() {
  return (
    <div>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/appointments" component={Appointments}></Route>
            <Route path="/book-slot" component={Bookings}></Route>
            <Redirect to="/signin" />
          </Switch>
        </ConnectedRouter>
      </Provider>
    </div>
  );
}

export default App;
