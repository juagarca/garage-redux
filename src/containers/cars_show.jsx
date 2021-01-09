import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import Sidebar from '../components/sidebar';
import { fetchCar } from '../actions';

class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  renderCar = (car) => {
    return (
      <div className="card-trip">
        <img src="../../assets/images/car.png" alt="car logo" />
        <div className="card-trip-infos">
          <div>
            <h2>{car.brand}</h2>
            <p>{car.model}</p>
          </div>
          <h2 className="card-trip-pricing">{car.owner}</h2>
          <span>{car.plate}</span>
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }
    return [
      <Sidebar key="sidebar" garageName={this.props.car.garage}>
        <Link to="/" className="btn btn-primary">Back</Link>
      </Sidebar>,
      <div key={this.props.car.id}>{this.renderCar(this.props.car)}</div>
    ];
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchCar: fetchCar,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);

