import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import Sidebar from '../components/sidebar';
import { showCar } from '../actions';


class CarShow extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.showCar(this.props.match.params.id);
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
        <Link to="/" className="btn btn-primary">Back</Link>
      </Sidebar>
    ];
  }
}

// function mapStateToProps(state) {
//   return {
//     cars: state.cars,
//   };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showCar: showCar,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(CarShow);

