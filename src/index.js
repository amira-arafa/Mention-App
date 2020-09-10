import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './shared/redux/store';
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#root')
);