import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}/>
            </Router>
        );
    }
}

export default AppRouter
