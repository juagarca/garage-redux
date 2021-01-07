import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Sidebar from '../components/sidebar';


class CarShow extends Component {
  // componentDidMount() {
  //   this.props.showCar(this.props.car.id);
  // }

  renderCar = (car) => {
    return (
      <div className="card-trip">
        <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg" />
        <div class="card-trip-infos">
          <div>
            <h2>{car.brand}</h2>
            <p>{car.model}</p>
          </div>
          <h2 class="card-trip-pricing">{car.owner}</h2>
          <span>{car.plate}</span>
        </div>
      </div>
    );
  }

  render() {
    return [
      <Sidebar key="sidebar" garageName={this.props.garageName}>
        <Link to="/" className="btn btn-primary">Back</Link>
      </Sidebar>,
      <div className="car-list">
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
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//       showCar: showCar,
//     }, dispatch);
// }

// function mapStateToProps(state, ownProps) {
//   const idFromUrl = parseInt(ownProps.match.params.id, 10);
//   const car = state.cars.find(c => c.id === idFromUrl);
//   return { car };
// }


export default connect(mapStateToProps, null)(CarShow);

