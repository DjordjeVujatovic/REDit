import React, { Component } from 'react';
import Week from '../../components/Week';
import Drawer from 'material-ui/Drawer';
import { data } from '../../mock-data';
import HeaderBar from '../../components/HeaderBar';

class Categories extends Component {
    constructor() {
        super();
        this.state = {
            weeks: data.weeks
        }
    }
    render() {
        return (
    <div>
        <Drawer >
          <HeaderBar/>
          {data.weeks.map((week)=>(
          <Week 
            title={week.title}
            categories={week.categories}
          />
          ))}
        </Drawer>
    </div>
        )
    }
};

export default Categories;