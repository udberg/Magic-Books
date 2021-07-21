import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createBook } from './actions';
import categories from './helper/category';
import Routes from './Routes/Routes';

const store = createStore(rootReducer);

/* eslint-disable */

store.dispatch(
  createBook({ title: 'A Gentleman in Moscow', category: categories[1] })
);
store.dispatch(
  createBook({ title: 'Between the world and me', category: categories[5] })
);
store.dispatch(
  createBook({ title: 'Thinking, Fast and Slow', category: categories[2] })
);

const MainApp = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>
);
ReactDOM.render(<MainApp />, document.getElementById('root'));
