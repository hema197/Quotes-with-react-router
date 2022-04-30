import React from 'react';
import { Suspense } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const QuoteDetails = React.lazy(() => import('./pages/QuoteDetails'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Suspense fallback={
      <div className='centered'>
        <LoadingSpinner/>
      </div>
    }>
       <Layout>
       <Switch>
      <Route path='/' exact>
        <Redirect to="/quotes"/>
      </Route>
     <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetails />
      </Route>
      <Route path="/newQuotes">
        <NewQuote/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
    </Layout>
    </Suspense>
   
   
  );
}

export default App;
