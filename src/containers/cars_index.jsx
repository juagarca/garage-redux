import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';
import Sidebar from '../components/sidebar';


class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garageName);
  }

  renderCar = (car) => {
    return (
      <div
        className="card-product"
        key={car.id}
      >
        <img src="../../assets/images/car.png" alt="car logo" />
        <div className="card-product-infos">
          <h2><strong>{car.brand} - {car.model}</strong></h2>
          <p><strong>Owner:</strong> {car.owner}</p>
        </div>
      </div>
    );
  }

  render() {
    return [
      <Sidebar key="sidebar" name={this.props.garageName}>
        <Link className="btn btn-primary" to="/cars/new">
          Add a car
        </Link>
      </Sidebar>,
      <div key="cars" className="car-list">
        {
          this.props.cars.map((car) => {
            return this.renderCar(car);
          })
        }
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    garageName: state.garageName,
    cars: state.cars,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchCars: fetchCars,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
