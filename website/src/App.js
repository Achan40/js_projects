import { Component } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About'

function App() {
  return (
    <Router>
      <PageWrapper>

        <Route
          // Using router we can create something similar to views 
          exact={true}
          path="/"
          component={Home}
        />

        <Route
          path="/About"
          component={About}
        />

      </PageWrapper>
    </Router>
  );
}

export default App;
