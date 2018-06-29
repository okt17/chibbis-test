import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import { fetchReviews } from './actions';
import './style';

function mapStateToProps(state) {
  return {
    reviews: state.reviews,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchReviews: (...args) => dispatch(fetchReviews(...args)),
  };
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app-root'),
);
