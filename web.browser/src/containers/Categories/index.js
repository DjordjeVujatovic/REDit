import React, { Component } from 'react';
import Week from '../../components/Week';
import Drawer from 'material-ui/Drawer';
import mockData from '../../mock-data';
import AppBar from 'material-ui/AppBar';

class Categories extends Component {
    constructor() {
        super();
        this.state = {
            weeks: mockData.weeks
        }
    }

    render() {
        return (
            <div>
                <Drawer >
                    <AppBar />
                    {mockData.weeks.map((week) => (
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