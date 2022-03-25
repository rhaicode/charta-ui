import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages';
import NotFound from './pages/404';
import ErrorHandler from './components/common/ErrorHandler';

const App: React.FC = () => (
  <ErrorHandler>
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </ErrorHandler>
);

export default App;
