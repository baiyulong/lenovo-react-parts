import React from 'react'
import MenuItemLi from './MenuItemLi'
import MenuStore from 'stores/MenuStore'

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        let data = this.props.data || {};
        this.state = {
            data: data.items,
            className: data.active ? 'nav nav-list collapse in' : 'nav nav-list collapse'
        }
    }
    render() {
        let items = this.state.data.map(item => (
            <MenuItemLi href={item.href} text={item.text} key={item.id}/>
        ));
        return (
            <ul className={this.state.className}>
                {items}
            </ul>
        );
    }
}
export default MenuItem
