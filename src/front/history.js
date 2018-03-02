import { syncHistoryWithStore } from 'react-router-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import store from './store';

const history = syncHistoryWithStore(createBrowserHistory(), store);

export default history;
