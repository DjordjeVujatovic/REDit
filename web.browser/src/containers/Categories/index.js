import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import IconButton from 'material-ui/IconButton';
import Week from '../../components/Week';
import { fetchWeeks, filterCategory } from '../../reducers/reducers';


class Categories extends Component {

  componentWillMount() {
    this.props.fetchWeeks(); //eslint-disable-line
  }

  render() {
    return (
      <div>
        <Drawer >
          <AppBar
            title={<span>RED it</span>}
            iconElementLeft={<IconButton><CommunicationImportContacts /></IconButton>}
          />
          {this.props.weeks.map((week, i) => (
            <Week
              key={i}
              categories={week.category}
              title={week.title}
              filterClick={this.props.handleFilterCategory}
            />
                    ))}
        </Drawer>
      </div>
    );
  }
}
Categories.propTypes = {
  weeks: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleFilterCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  weeks: state.weeks,
});

const mapDispatchToProps = dispatch => ({
  handleFilterCategory: (category) => {
    dispatch(filterCategory(category));
  },
  fetchWeeks: () => {
    dispatch(fetchWeeks());
  },
});



export default connect(mapStateToProps, mapDispatchToProps)(Categories);
