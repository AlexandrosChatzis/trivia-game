import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // removing StrictMode in order not to render twice when we api call
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
