import React from 'react'
import HeadSearch from './HeadSearch'
import Icon from './Icon'

class Header extends React.Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <Icon className="glyphicon glyphicon-list"/>
                        </a>
                        <a className="navbar-brand" href="#">Lenovo Services</a>
                    </div>
                    <HeadSearch/>
                </div>
            </div>
        )
    }
}

export default Header
