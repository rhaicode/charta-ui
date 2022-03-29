import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages';
import NotFound from './pages/404';
import Login from './pages/login';
import Signup from './pages/signup';

import ErrorHandler from './components/common/ErrorHandler';

const App: React.FC = () => (
  <ErrorHandler>
    <Switch>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/signup" render={() => <Signup />} />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </ErrorHandler>
);

export default App;
