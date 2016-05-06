import React from 'react'
import MenuItemLi from './MenuItemLi'

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'nav nav-list collapse'
        }
    }
    render() {
        let items = this.props.data.map((item, index) = > {
            <MenuItemLi href={item.href} text={item.text} key={index}/>
        });
        return (
            <ul className={this.state.className}>
                {items}
            </ul>
        );
    }
}
export default MenuItem
