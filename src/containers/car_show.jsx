import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Sidebar from '../components/sidebar';


class CarShow extends Component {
  // componentDidMount() {
  //   this.props.showCar(this.props.car.id);
  // }

  // renderCar = (car) => {
  //   return (
  //     <div
  //       className="card-product"
  //       key={car.id}
  //     >
  //       <img src="../../assets/images/car.png" alt="car logo" />
  //       <div className="card-product-infos">
  //         <h2><strong>{car.brand} - {car.model}</strong></h2>
  //         <p><strong>Owner:</strong> {car.owner}</p>
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return [
      <Sidebar key="sidebar" garageName={this.props.garageName}>
        <Link to="/" className="btn btn-primary">Back</Link>
      </Sidebar>
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

