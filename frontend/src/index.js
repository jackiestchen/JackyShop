import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import './bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FlagsmithProvider } from 'flagsmith/react.js';
import flagsmith from 'flagsmith';

ReactDOM.render(
  <Provider store={store}>
    <FlagsmithProvider
      options={{
        environmentID: 'RwokTfveJngBCY9ZeNVMvm'
      }}
      flagsmith={flagsmith}
    >
      <App />
    </FlagsmithProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
