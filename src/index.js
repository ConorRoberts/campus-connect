import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './screens/Home';
import Chat from "./screens/Chat";

ReactDOM.render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>,
  document.getElementById('root')
);