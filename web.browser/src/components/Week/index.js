import React from 'react';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';


const Week = ({title, categories}) => {
    return (
        <div>
            <Subheader>{title}</Subheader>
            <List>
            {categories.map((category, i) => (
                <ListItem key={i}>{category}</ListItem>
            ))}
            </List>
            <Divider />
        </div>
    )
}

Week.propTypes = {
    title: React.PropTypes.string.isRequired,
    categories: React.PropTypes.array.isRequired
}

export default Week;