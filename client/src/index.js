import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer 
    position="top-center"
    autoClose={5000}
    hideProgressBar
    newestOnTop
    closeOnClick
    draggable={false}
    theme="colored"
    />
  </React.StrictMode>
);
