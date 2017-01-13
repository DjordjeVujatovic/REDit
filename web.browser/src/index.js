import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Welcome from './containers/Welcome';
import Login from './containers/Login';
import PostList from './containers/PostList';
import CreatePost from './containers/CreatePost';
import MainLayout from './layouts/MainLayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/mui-theme';
import './styles/index.css';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';


// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route component={MainLayout}>
        <Route path="/" component={App}>
          <IndexRoute component={Welcome}/>
          <Route path="/Login" component={Login} />
          <Route path="/posts">
            <Route path="/new" component={CreatePost} />
            <Route path=":name" component={PostList} />
          </Route>
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
