// React library ko import kar rahe hain — UI components banane ke liye
import React from 'react';

// ReactDOM client ko import kar rahe hain — React app ko DOM (HTML) me mount karne ke liye
import ReactDOM from 'react-dom/client';

// Apna main App component import kar rahe hain jisme poora application structure hoga
import App from './App';

// Bootstrap ki CSS import kar rahe hain — styling ke liye
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap ka JavaScript bundle import kar rahe hain — navbar toggle jaise components ke liye zaroori hota hai
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Apni custom CSS file import kar rahe hain
import './app.css';

// React ka root element create kar rahe hain jo index.html me <div id="root"></div> ke andar render hoga
const root = ReactDOM.createRoot(document.getElementById('root'));

// React ka App component browser me render kar rahe hain
root.render(<App />);
