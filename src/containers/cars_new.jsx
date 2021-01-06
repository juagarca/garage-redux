import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import Sidebar from '../components/sidebar';
import { createCar } from '../actions';


class CarsNew extends Component {
  onSubmit = (values) => {
    console.log(values);
    this.props.createCar(this.props.garageName, values, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  render() {
    return [
      <Sidebar key="sidebar" name={this.props.garageName}>
        <Link to="/" className="btn btn-primary">Back</Link>
      </Sidebar>,
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <label htmlFor="InputBrand">Brand</label>
        <Field
          label="Brand"
          name="brand"
          type="text"
          className="form-control"
          component="input"
        />
        <label htmlFor="InputModel">Model</label>
        <Field
          className="form-control"
          label="Model"
          name="model"
          type="text"
          component="input"
        />
        <label htmlFor="InputOwner">Owner</label>
        <Field
          className="form-control"
          label="Owner"
          name="owner"
          type="text"
          component="input"
        />
        <label htmlFor="InputPlate">Plate</label>
        <Field
          className="form-control"
          label="Plate"
          name="plate"
          type="text"
          component="input"
        />
        <button
          className="btn btn-primary"
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >Create Car</button>
      </form>
    ];
  }
}

function mapStateToProps(state) {
  return {
    garageName: state.garageName
  };
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
