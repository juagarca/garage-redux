import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import Sidebar from '../components/sidebar';
import { fetchCar, deleteCar } from '../actions';

class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = () => {

  }

  renderCar = (car) => {
    return [
      <img src="../../assets/images/car.png" alt="car logo" />,
      <div className="card-infos">
        <div>
          <h2>{car.brand}</h2>
          <p>{car.model}</p>
        </div>
        <span className="card-owner">{car.owner}</span>
        <p className="plate-border">{car.plate}</p>
      </div>,
      <span className="btn btn-primary" onClick={this.handleClick}>Delete</span>
    ];
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }
    return [
      <Sidebar key="sidebar" garageName={this.props.car.garage}>
        <Link to="/" className="btn btn-primary">Back</Link>
      </Sidebar>,
      <div className="card-car" key={this.props.car.id}>{this.renderCar(this.props.car)}</div>
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
      deleteCar: deleteCar
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);

