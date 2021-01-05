import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCars } from '../actions';


class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.garage);
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
    return (
      <div className="car-list">
        {
          this.props.cars.map((car) => {
            return this.renderCar(car);
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchCars: fetchCars,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
