import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import Sidebar from '../components/sidebar';
import { createCar } from '../actions';


class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garageName, values, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  render() {
    return [
      <Sidebar key="sidebar" garageName={this.props.garageName}>
        <Link to="/" className="btn btn-primary">Back</Link>
      </Sidebar>,
      <div className="form-container" style={{ backgroundImage: "url('/assets/images/garage.png')" }}>
        <div className="overlay" />
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <label htmlFor="InputBrand">Brand</label>
          <Field
            id="InputBrand"
            label="Brand"
            name="brand"
            type="text"
            className="form-control"
            component="input"
          />
          <label htmlFor="InputModel">Model</label>
          <Field
            id="InputModel"
            className="form-control"
            label="Model"
            name="model"
            type="text"
            component="input"
          />
          <label htmlFor="InputOwner">Owner</label>
          <Field
            id="InputOwner"
            className="form-control"
            label="Owner"
            name="owner"
            type="text"
            component="input"
          />
          <label htmlFor="InputPlate">Plate</label>
          <Field
            id="InputPlate"
            className="form-control"
            label="Plate"
            name="plate"
            type="text"
            component="input"
          />
          <div className="text-center">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
            >Create Car</button>
          </div>
        </form>
      </div>
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
