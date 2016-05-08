import React from 'react'
import MenuHead from './MenuHead'
import MenuItem from './MenuItem'
import MenuStore from 'stores/MenuStore'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: MenuStore.getAll() || []
        }
    }
    componentDidMount() {
        MenuStore.addChangeListener(this._onChange.bind(this));
    }
    componentWillUnmount() {
        MenuStore.removeChangeListener(this._onChange.bind(this));
    }
    render() {
        let items = '';
        if (this.state.data.length > 0) {
            items = this.state.data.map(function(item) {
                let headClass;
                let iconType;
                let itemClass;
                if (item.active) {
                    headClass = 'nav-header';
                    iconType = 'fa fa-chevron-down';
                    itemClass = 'nav nav-list collapse in';
                } else {
                    headClass = 'nav-header collapsed';
                    iconType = 'fa fa-chevron-left';
                    itemClass = 'nav nav-list collapse';
                }
                return (
                    <li key={item.id}>
                        <MenuHead data={item} className={headClass} iconType={iconType}/>
                        <MenuItem data={item.items} className={itemClass}/>
                    </li>
                );
            });
        }
        return (
            <ul>{items}</ul>
        );
    }
    _onChange() {
        this.setState({data: MenuStore.getAll()});
    }
}

export default Menu
