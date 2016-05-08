require('styles/theme.css');
// require('styles/premium.css');
require('styles/basic.css');
// require('styles/main.css');
let $ = window.$ = window.jQuery = require('jquery');
$();
require('bootstrap');
import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';

class App extends React.Component {
    render() {
        return (
            <div className="theme-blue">
                <Header/>
                <div className="sidebar-nav">
                    <Menu/>
                </div>
                <Content/>
            </div>
        );
    }
}

export default App;
