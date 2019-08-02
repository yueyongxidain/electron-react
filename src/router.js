import React from 'react'
import { Router, Route } from 'react-router';
import Main from './routes/main/index'
import Add from './routes/add/index'
const createHistory = require("history").createHashHistory;

function RouterConfig() {
    return (<Router history={createHistory()}>
        <Route path="/" exact component={Main} />
        <Route path="/add" exact component={Add} />
    </Router>)
}
export default RouterConfig