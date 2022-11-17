import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import TaskProvider from './context/TaskProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
);