import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const MainApp = () => (
    <Provider store={store}>
      <App />
    </Provider>
);

ReactDOM.render(<MainApp />, document.getElementById('root'));

