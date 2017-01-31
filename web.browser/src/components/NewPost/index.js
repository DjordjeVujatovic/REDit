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
    <Card>
      <Paper>
        <Toolbar>
          <ToolbarTitle text="Share a new link" />
        </Toolbar>
        <CardText>
          <form>
            <TextField
              hintText="Title"
              errorText="Please provide a title"
              floatingLabelText="Title"
            /><br />

            <TextField
              hintText="Description"
              errorText="Please provide a description"
              floatingLabelText="Description"
            /><br />

            <SelectField
              floatingLabelText="Select a lesson"
            >
            </SelectField><br />

            <TextField
              hintText="Link"
              errorText="You're sharing a link, provide a link"
              floatingLabelText="Link"
            /><br />

            <TextField
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
