import React from 'react'
import MenuItemLi from './MenuItemLi'

class MenuItem extends React.Component {
    render() {
        let items = this.props.data.map(item => (
            <MenuItemLi href={item.href} text={item.text} key={item.id}/>
        ));
        return (
            <ul className={this.props.className}>
                {items}
            </ul>
        );
    }
}
MenuItem.defaultProps = {
    data: {},
    className: 'nav nav-list collapse'
};
export default MenuItem
