import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './global.css';

const rootElement = document.querySelector('#root');

if (!rootElement) {
    alert("No root element found in document");
}
else {
    const root = createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}

