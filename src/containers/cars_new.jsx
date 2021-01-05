import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import Sidebar from '../components/sidebar';
import { createCar } from '../actions';


class CarsNew extends Component {
  render() {
    return [
      <Sidebar key="sidebar" name={this.props.garageName}>
        <Link to="/">
          Back
        </Link>
      </Sidebar>,
      <form>
        <input />
      </form>
    ];
  }
}

export default reduxForm({ form: 'newPostForm' })(
  connect(null, { createCar })(CarsNew)
);
