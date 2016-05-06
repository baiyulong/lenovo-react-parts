import React from 'react'

class MenuItemLi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: '',
            iconType: ''
        }
    }
    render() {
        return (
            <li className={this.state.active}>
                <a href={this.props.href} onClick={this._onClick}>{this.props.text}</a>
            </li>
        )
    }
    /**
     * 激活当前点击项
     * @active 激活className
     */
    _onClick() {
        this.setState({active: 'active'});
    }
}
export default MenuItemLi
