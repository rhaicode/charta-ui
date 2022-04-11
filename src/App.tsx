import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
import Payment from './pages/payment';
import ContractSent from './pages/contract-sent';

const App: React.FC = () => {
  const [onboardedUser] = useAtom(onboardedUserAtomPersist);
  const isAnsweringQuestions =
    !onboardedUser.isReviewing &&
    !onboardedUser.isPaying &&
    !onboardedUser.isContractSent;

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
            if (onboardedUser.isReviewing) {
              return <Redirect to="/review" />;
            }
            if (onboardedUser.isPaying) {
              return <Redirect to="/payment" />;
            }
            if (onboardedUser.isContractSent) {
              return <Redirect to="/contract-sent" />;
            }

            return <StepThrough />;
          }}
        />
        <Route
          path="/review"
          render={() => {
            if (isAnsweringQuestions) {
              return <Redirect to="/step-through" />;
            }
            if (onboardedUser.isPaying) {
              return <Redirect to="/payment" />;
            }
            if (onboardedUser.isContractSent) {
              return <Redirect to="/contract-sent" />;
            }
            return <Review />;
          }}
        />
        <Route
          path="/payment"
          render={() => {
            if (isAnsweringQuestions) {
              return <Redirect to="/step-through" />;
            }
            if (onboardedUser.isReviewing) {
              return <Redirect to="/review" />;
            }
            if (onboardedUser.isContractSent) {
              return <Redirect to="/contract-sent" />;
            }
            return <Payment />;
          }}
        />
        <Route
          path="/contract-sent"
          render={() => {
            if (isAnsweringQuestions) {
              return <Redirect to="/step-through" />;
            }
            if (onboardedUser.isReviewing) {
              return <Redirect to="/review" />;
            }
            if (onboardedUser.isPaying) {
              return <Redirect to="/payment" />;
            }
            return <ContractSent />;
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
