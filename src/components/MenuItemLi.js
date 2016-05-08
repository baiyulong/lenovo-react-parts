import React from 'react'

class MenuItemLi extends React.Component {
    render() {
        return (
            <li className={this.props.active}>
                <a href={this.props.href} onClick={this._onClick.bind(this)}>{this.props.text}</a>
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
