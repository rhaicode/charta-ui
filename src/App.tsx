import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages';
import NotFound from './pages/404';
import Login from './pages/login';
import Signup from './pages/signup';
import StepThrough from './pages/step-through';

import ErrorHandler from './components/common/ErrorHandler';
import GetStartedPage from './pages/getstarted';

const App: React.FC = () => (
  <ErrorHandler>
    <Switch>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/signup" render={() => <Signup />} />
      <Route exact path="/get-started" render={() => <GetStartedPage />} />
      <Route path="/step-through" render={() => <StepThrough />} />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </ErrorHandler>
);

export default App;
