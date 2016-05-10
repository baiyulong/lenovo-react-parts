import React from 'react'
import MenuAction from 'actions/MenuAction'

class MenuItemLi extends React.Component {
    render() {
        let active = this.props.data.active ? 'active' : '';
        return (
            <li className={active}>
                <a href={this.props.data.href} onClick={this._onClick.bind(this)}>{this.props.data.text}</a>
            </li>
        )
    }
    /**
     * 激活当前点击项
     * @active 激活className
     */
    _onClick() {
        MenuAction.activeMenuItem({pid: this.props.pid, id: this.props.data.id});
    }
}
export default MenuItemLi
