import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
import Base from '../imports/ui/components/admin/base.jsx';
import BaseMain from '../imports/ui/components/BaseMain.jsx';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={BaseMain} />
    </Route>
    <Route path="/admin" component={App} >
      <IndexRoute component={Base} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  render(routes, document.getElementById('render-target'));
});
