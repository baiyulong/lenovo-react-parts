import React from 'react'
import MenuItemLi from './MenuItemLi'

class MenuItem extends React.Component {
    render() {
        let items = this.props.data.map(item => (
            <MenuItemLi pid={this.props.index} data={item} key={item.id}/>
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
