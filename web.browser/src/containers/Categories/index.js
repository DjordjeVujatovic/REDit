import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import IconButton from 'material-ui/IconButton';
import Week from '../../components/Week';
import mockData from '../../mock-data';


class Categories extends Component {

  render() {
    return (
      <div>
        <Drawer >
          <AppBar 
            title={<span>RED it</span>}
            iconElementLeft={<IconButton><CommunicationImportContacts /></IconButton>}
          
          />
          {this.props.weeks.map((week) => (
            <Week
              title={week.title}
              categories={week.categories}
            />
                    ))}
        </Drawer>
      </div>
    );
  }
}
Categories.propTypes = {
  weeks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  weeks: state.weeks,
});

export default connect(mapStateToProps)(Categories);
