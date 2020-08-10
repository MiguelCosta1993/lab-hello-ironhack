import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Second from './Second';
import Nav from './Nav';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Second />, document.getElementById('second'));
ReactDOM.render(<Nav />, document.getElementById('nav'));
