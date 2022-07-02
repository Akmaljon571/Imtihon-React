import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthPriveder } from './content/Auth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <AuthPriveder>
     <App />
   </AuthPriveder>
  </BrowserRouter>

);

