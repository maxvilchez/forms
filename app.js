import React from 'react';
import { render } from 'react-dom';

import App from './src/index';
import 'bootstrap/js/dist/dropdown'; 
import "./app.scss";

render(
  <App/>,
  document.getElementById("root")
);