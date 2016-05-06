import React from 'react'
import Icon from './Icon'

class MenuHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'nav-header collapsed',
            iconType: 'fa fa-chevron-left',
        };
    }
    render() {
        if (!this.props.text) {
            return null;
        }
        let firstIcon;
        if (this.props.icon) {
            firstIcon = <Icon className={this.props.icon}/>
        }
        return (
            <a className={this.state.className}>
                {firstIcon}
                {this.props.text}
                <Icon className={this.state.iconType}/>
            </a>
        );
    }
    _toggleItem(this.props.item) {
        this.setState({iconType: 'fa fa-chevron-down'});
    }
}

export default MenuHead
