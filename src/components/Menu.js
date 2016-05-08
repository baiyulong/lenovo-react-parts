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
            items = this.state.data.map(item => (
                <li key={item.id}>
                    <MenuHead data={item}/>
                    <MenuItem data={item}/>
                </li>
            ));
        }
        return (
            <div className="sidebar-nav">
                <ul>{items}</ul>
            </div>
        );
    }
    _onChange() {
        this.setState({data: MenuStore.getAll()});
    }
}

export default Menu
