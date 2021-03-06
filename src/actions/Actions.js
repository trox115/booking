import * as auth from '../api/register';
import * as barbers from '../api/AllApi';

export function loginSuccess(user) {
  return { type: 'CREATE_SESSION', user };
}

export function Login(user) {
  return function unamed(dispatch) {
    return auth
      .session(user)
      .then(response => {
        dispatch(loginSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
}
export function barberSuccess(barber) {
  return { type: 'CREATE_BARBER', barber };
}
export function Barbers() {
  return function unamed2(dispatch) {
    return barbers
      .getBarbers()
      .then(response => {
        dispatch(barberSuccess(response));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function bookingSuccess(booking) {
  return { type: 'CREATE_BOOKING', booking };
}
export function Bookings() {
  return function unamed2(dispatch) {
    return barbers
      .getBookings()
      .then(response => {
        dispatch(bookingSuccess(response));
      })
      .catch(error => {
        throw error;
      });
  };
}
export function deleteSe(response) {
  return { type: 'DELETE_SESSION', response };
}

export function logout() {
  return function unamed(dispatch) {
    return barbers
      .deleteSession()
      .then(response => {
        dispatch(deleteSe(response));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function authSuccess(response) {
  return { type: 'CREATE_AUTH', response };
}

export function isAuthenticated() {
  return function unamed(dispatch) {
    return barbers
      .isLoggedIn()
      .then(response => {
        dispatch(authSuccess(response));
      })
      .catch(error => {
        throw error;
      });
  };
}
