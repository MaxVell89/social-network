// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Instruments
import {store} from './store/index';

// App
import Routes from "./routes/routes";

render(
    <Provider store = {store}>
        <Router>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('root')
);
