import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarsIndex extends Component {

  renderCar = (car) => {
    return (
      <div
        className="card-product"
        key={car.id}
      >
        <img src="../../assets/images/car.png" />
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
    cars: state.cars
  };
}

export default connect(mapStateToProps)(CarsIndex);
