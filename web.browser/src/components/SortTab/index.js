import React, { PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

const SortTab = ({sortPopular, sortNewest}) => {
    return (
        <div>
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text="Posts" />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text="Sort" />
                    <FlatButton onClick={ sortPopular } >Popular</FlatButton>
                    <FlatButton onClick={ sortNewest } >Newest</FlatButton>
                </ToolbarGroup>
            </Toolbar>
        </div>
    )

}
SortTab.propTypes = {
    sortPopular: PropTypes.func.isRequired,
}
export default SortTab;