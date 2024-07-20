import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.css'
import {CounterApp} from './CounterApp.jsx';
// import {FirstApp} from "./FirstApp.jsx";
// import HelloWorldApp from "./HelloWorldApp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={0} />
    </React.StrictMode>
)