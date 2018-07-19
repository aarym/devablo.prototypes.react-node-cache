import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as cacheService from './cache-service';

cacheService.start(function(err) {
    if (err) console.error(err);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
