import React from 'react';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';

const Week = ({title, categories}) => {
    return (
        <div>
            <h2>{title}</h2>
            <List>
            {categories.map((category, i) => (
                <ListItem key={i}>{category}</ListItem>
            ))}
            </List>
            <Divider />
        </div>
    )

}

export default Week;