import React from 'react'
import { Router, Route } from 'react-router';
import App from './App'
import App1 from './App1'
const createHistory = require("history").createBrowserHistory;
function RouterConfig() {
    return (<Router history={createHistory()}>
        <Route path="/" component={App} />
        <Route path="/app1" component={App1} />
    </Router>)
}
export default RouterConfig