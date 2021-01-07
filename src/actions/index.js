const BASE_URL = 'https://wagon-garage-api.herokuapp.com';

export const FETCH_CARS = 'FETCH_CARS';
export const CREATE_CAR = 'CREATE_CAR';
export const SHOW_CAR = 'SHOW_CAR';
export const DELETE_CAR = 'DELETE_CAR';

export function fetchCars(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url).then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function createCar(garage, carData, callback) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(carData)
  }).then(response => response.json())
    .then(callback);
  return {
    type: CREATE_CAR,
    payload: promise
  };
}

export function fetchCar(id) {
  const url = `${BASE_URL}/cars/${id}`;
  const promise = fetch(url).then(response => response.json());
  return {
    type: SHOW_CAR,
    payload: promise
  };
}

// export function deleteCar(id) {
//   const url = `${BASE_URL}/cars/${id}`;
//   const promise = fetch(url).then(response => response.json());
//   return {
//     type: FETCH_CARS,
//     payload: promise
//   };
// }
