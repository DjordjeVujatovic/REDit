import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './styles.css';

class Login extends Component {
  render() {
    return (
      <div className={styles.loginContainer}>
        <Card className={styles.card}>
          <Paper>
            <Toolbar>
              <ToolbarTitle text="Sign In" />
            </Toolbar>
            <CardText>
              <form>
                <TextField
                  style={{
                    width: '100%',
                  }}
                  hintText="Email"
                  errorText="Please enter your email."
                  floatingLabelText="Email"
                  width="100%"
                /><br />

                <TextField
                  style={{
                    width: '100%',
                  }}
                  hintText="Password"
                  errorText="Please enter your password."
                  floatingLabelText="Password"
                /><br />
                <RaisedButton
                  backgroundColor="red"
                  labelColor="white"
                  label="Login"
                />
                <RaisedButton
                  background="transparent"
                  labelColor="black"
                  label="Sign Up"
                />
              </form>
            </CardText>
          </Paper>
        </Card>
      </div>
    );
  }
}


export default Login;
