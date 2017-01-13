import React, { Component } from 'react';
import Week from '../../components/Week';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import HeaderBar from '../../components/HeaderBar';

class Categories extends Component {
    render() {
        return (
    <div>
        <Drawer >
          <HeaderBar/>
          <MenuItem>Week 1</MenuItem>
        </Drawer>
    </div>
        )
    }
};

export default Categories;