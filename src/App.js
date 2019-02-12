import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Invoices from './components/Invoices';
import Create from './components/Create';
import Edit from './components/Edit';
import Details from './components/Details/Details';
import DeleteAll from './components/DeleteAll';
import { About } from './components/About';
import { NotFound } from './components/NotFound/NotFound';

import styles from './app.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <BrowserRouter> 
        <Suspense fallback={<div>Loading...</div>}>
          <Header/>
          <Switch>
            <Route exact path='/' component={Invoices} />
            <Route path='/invoices' component={Invoices} />
            <Route path='/details/:id' component={Details} /> 
            <Route path='/create' component={Create} />
            <Route path='/edit/:id' component={Edit} /> 
            <Route path='/clear' component={DeleteAll} />
            <Route path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;