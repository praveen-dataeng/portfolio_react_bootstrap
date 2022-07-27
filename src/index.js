// ***---- THIS METHOD iS DEPRECATED ---****//
// import ReactDOM from "react-dom";
// ReactDOM.render(<App />, document.querySelector('#root'));

import React from "react";
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
