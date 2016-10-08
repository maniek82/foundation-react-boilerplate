var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <h2 className="text-center">Foundation - React - Webpack - Template</h2>,
  // <Router history={hashHistory}>
  //   <Route path="/" component={}>
  //     // <Route path=" " component{}=/>
  //     // <Route path="" component={}/>
  //     <IndexRoute component={}/>
  //   </Route>
  // </Router>,
  document.getElementById('app')
);
