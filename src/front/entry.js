
import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Router, Route, Switch, IndexRoute, Redirect } from 'react-router';

import AppLayout from './components/AppLayout';
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';
import PageDataTable from './components/PageDataTable';

import history from './history';
import store from './store';
import { fetchPageData } from "./actions";

const pagesSpec = {
    front: {

    }
}

const page = (pageid, ...data) => {
    const spec = pagesSpec[pageid] || {};
    return (ctx) => {
        fetchPageData(location.pathname, ctx.params || {});
    }
}

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={AppLayout}>
                <IndexRoute component={HomePage} onEnter={page('front')}/>
                <Route path="blockchain">
                    <Route path="tx/:id" onEnter={page('front')}/>
                    <Route path="block/:id" onEnter={page('front')}/>
                    <Route path="address/:id" onEnter={page('front')}/>

                    <Route path="txns" component={PageDataTable} onEnter={page('txns')}/>
                    <Route path="txns-pending" component={PageDataTable} onEnter={page('txns-pending')}/>
                    <Route path="txns-internal" component={PageDataTable} onEnter={page('txns-internal')}/>
                    <Route path="blocks" component={PageDataTable} onEnter={page('blocks')}/>
                    <Route path="uncles" component={PageDataTable} onEnter={page('unckes')}/>
                </Route>
                <Route path="account">
                    <Route path="all" component={PageDataTable} onEnter={page('account-all')}/>
                    <Route path="certified-contracts" component={PageDataTable} onEnter={page('certified-contracts')}/>
                </Route>
                <Route path="token">
                    <Route path="all" component={PageDataTable} onEnter={page('front')}/>
                    <Route path="transfers" component={PageDataTable} onEnter={page('front')}/>
                </Route>
            </Route>
            <Route path="*" component={AppLayout} >
                <IndexRoute component={NotFound} onEnter={page('front')}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('wallet-app')
);



// const WebSocket = require('ws');
// const ws = new WebSocket(`ws://${ location.host }`);

// ws.
