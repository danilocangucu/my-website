import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

import store from "./redux/store";
import './index.css';
import App from './App';
import "./i18n/i18n";
import Plausible from "plausible-tracker";

const plausible = Plausible({
  domain: "danilocangucu.net",
});

plausible.enableAutoPageviews();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
