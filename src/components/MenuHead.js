import React from 'react'
import Icon from './Icon'
import MenuAction from 'actions/MenuAction'

class MenuHead extends React.Component {
    render() {
        if (!this.props.data.text) {
            return null;
        }
        let firstIcon;
        if (this.props.data.icon) {
            firstIcon = <Icon className={this.props.data.icon}/>
        }
        return (
            <a className={this.props.className} onClick={this._onClick.bind(this)}>
                {firstIcon}
                {this.props.data.text}
                <Icon className={this.props.iconType}/>
            </a>
        );
    }
    _onClick() {
        MenuAction.toggleMenuItem(this.props.data);
    }
}

MenuHead.defaultProps = {
    data: {},
    className: 'nav-header collapsed',
    iconType: 'fa fa-chevron-left'
};

export default MenuHead
