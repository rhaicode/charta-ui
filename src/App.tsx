import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useAtom } from 'jotai';

import Landing from './pages';
import NotFound from './pages/404';
import Login from './pages/login';
import Signup from './pages/signup';
import StepThrough from './pages/step-through';
import ErrorHandler from './components/common/ErrorHandler';
import GetStartedPage from './pages/getstarted';
import Review from './pages/review';

import { onboardedUserAtomPersist } from './atoms';

const App: React.FC = () => {
  const [onboardedUser] = useAtom(onboardedUserAtomPersist);

  return (
    <ErrorHandler>
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/signup" render={() => <Signup />} />
        <Route exact path="/get-started" render={() => <GetStartedPage />} />
        <Route
          path="/step-through"
          render={() => {
            if (onboardedUser.isReviewing) return <Review />;
            return <StepThrough />;
          }}
        />
        <Route
          path="/review"
          render={() => {
            if (!onboardedUser.isReviewing) return <StepThrough />;
            return <Review />;
          }}
        />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </ErrorHandler>
  );
};

export default App;
