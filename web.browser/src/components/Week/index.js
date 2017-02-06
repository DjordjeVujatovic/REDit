import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';


const Week = ({ title, categories, filterClick }) => {
  return (
    <div>
      <Subheader>{title}</Subheader>
      <List>
        {categories.map((category, i) => (
          <ListItem key={i.toString()} onClick={() => filterClick(category)}>
            {category}
          </ListItem>
            ))}
      </List>
      <Divider />
    </div>
  );
};

Week.propTypes = {
  title: React.PropTypes.string.isRequired,
  categories: React.PropTypes.arrayOf(PropTypes.object).isRequired,
  filterClick: React.PropTypes.func.isRequired,
};

export default Week;
