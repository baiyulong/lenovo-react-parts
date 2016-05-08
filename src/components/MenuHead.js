import React from 'react'
import Icon from './Icon'
import MenuAction from 'actions/MenuAction'

class MenuHead extends React.Component {
    constructor(props) {
        super(props);
        let data = this.props.data || {};
        this.state = {
            data: data,
            className: data.active ? 'nav-header' : 'nav-header collapsed',
            iconType: data.active ? 'fa fa-chevron-down' : 'fa fa-chevron-left'
        };
    }
    render() {
        if (!this.state.data.text) {
            return null;
        }
        let firstIcon;
        if (this.state.data.icon) {
            firstIcon = <Icon className={this.state.data.icon}/>
        }
        return (
            <a className={this.state.className} onClick={this._onClick.bind(this)}>
                {firstIcon}
                {this.state.data.text}
                <Icon className={this.state.iconType}/>
            </a>
        );
    }
    _onClick() {
        // if (this.state.className.indexOf('collapsed') == -1) {
        //     this.setState({
        //         className: this.state.className + ' collapsed',
        //         iconType: 'fa fa-chevron-left'
        //     });
        // } else {
        //     this.setState({
        //         className: this.state.className.replace(' collapsed', ''),
        //         iconType: 'fa fa-chevron-down'
        //     });
        // }
        MenuAction.toggleMenuItem(this.state.data);
    }
}

export default MenuHead
