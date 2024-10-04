import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './global.css';
import { PostContextProvider } from './contexts/PostContext';
import { ModalContextProvider } from './contexts/ModalContext';

const rootElement = document.querySelector('#root');

if (!rootElement) {
    alert("No root element found in document");
}
else {
    const root = createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <PostContextProvider>
                <ModalContextProvider>
                    <App />
                </ModalContextProvider>
            </PostContextProvider>
        </React.StrictMode>
    )
}

