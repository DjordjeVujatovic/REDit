import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './style.css';

const NewPost = () => (
  <div className={styles.formContainer}>
    <Card className={styles.card}>
      <Paper>
        <Toolbar>
          <ToolbarTitle text="Share a new link" />
        </Toolbar>
        <CardText>
          <form>
            <TextField
              style={{
                width: '100%',
              }}
              hintText="Title"
              errorText="Please provide a title"
              floatingLabelText="Title"
            /><br />

            <TextField
              style={{
                width: '100%',
              }}
              hintText="Description"
              errorText="Please provide a description"
              floatingLabelText="Description"
            /><br />

            <SelectField
              style={{
                width: '100%',
              }}
              floatingLabelText="Select a lesson"
            >
            </SelectField><br />

            <TextField
              style={{
                width: '100%',
              }}
              hintText="Link"
              errorText="You're sharing a link, provide a link"
              floatingLabelText="Link"
            /><br />

            <TextField
              style={{
                width: '100%',
              }}
              hintText="Tags"
              floatingLabelText="Tags"
            /><br />
            <RaisedButton
              backgroundColor="red"
              labelColor="white"
              label="Submit"
            />
          </form>
        </CardText>
      </Paper>
    </Card>
  </div>
);

export default NewPost;
