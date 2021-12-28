import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './components/pages/HomePage';
import ProjectPage from './components/pages/ProjectPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/projects" component={ProjectPage} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
