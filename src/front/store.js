import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
const { devToolsExtension } = window;
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import * as reducers from './reducers';


const loggerMiddleware = createLogger()


const store = createStore(
	combineReducers({
		...reducers,
		routing: routerReducer,
	}),

	devToolsExtension && devToolsExtension(),

	applyMiddleware(
		thunkMiddleware,
	),
);

export default store;
