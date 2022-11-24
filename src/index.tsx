import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store/configureStore';

const input = document.getElementById('root');

const container: HTMLElement = input as HTMLElement; // type assertion
const root = createRoot(container);
root.render(<Provider store={store}><App /> </Provider>);