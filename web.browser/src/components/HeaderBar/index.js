import React from 'react';
import AppBar from 'material-ui/AppBar';
import styles from './styles.css';
import FlatButton from 'material-ui/FlatButton';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const flatButtonStyle = {
  color: 'white',
  margin: '1rem 0 0 1rem',
  textTransform: 'uppercase',
  fontSize: '14px'
}
const HeaderBar = () => (
  <div>
    <AppBar title="RED it">
      <FlatButton style={flatButtonStyle}>Share a new link</FlatButton>
      <FlatButton style={flatButtonStyle }>Home</FlatButton>
    </AppBar>

  </div>
);

export default HeaderBar;