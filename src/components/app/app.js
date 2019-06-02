import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from 'routes/main'

const App = () => (
  <Switch>
    <Route exact path="/" component={Main}/>
  </Switch>
);

export default App;
