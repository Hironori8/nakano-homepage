import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './Component/App';
import configureStore from './stores/store';

const store = configureStore();
console.log(store.getState());

ReactDOM.render(
		<Provider store={store}>
				<App/>
		</Provider>,
		document.getElementById('root')
);
