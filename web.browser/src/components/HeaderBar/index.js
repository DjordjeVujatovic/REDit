import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const flatButtonStyle = {
  color: 'white',
  margin: '1rem 0 0 1rem',
  textTransform: 'uppercase',
  fontSize: '14px',
};
const HeaderBar = () => (
  <div>
    <AppBar title="RED it">
      <Link to="/posts/new">
        <FlatButton style={flatButtonStyle}>Share a new link</FlatButton>
      </Link>
      <Link to="/">
        <FlatButton style={flatButtonStyle}>Home</FlatButton>
      </Link>
    </AppBar>

  </div>
);

export default HeaderBar;
