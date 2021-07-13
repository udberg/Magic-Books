import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';

const MainApp = () => (
    <Provider store={store}>
      <App />
    </Provider>
);

ReactDOM.render(<MainApp />, document.getElementById('root'));
