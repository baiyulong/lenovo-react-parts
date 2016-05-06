import React from 'react'
import Icon from './Icon'
import { Link } from 'react-router'
var MenuStore = require('stores/MenuStore')

class MenuLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            href: this.props.href || '',
            text: this.props.text,
            classText: this.props.classText,
            firstIcon: this.props.firstIcon || 'fa fa-arrow-circle-right',
            secondIcon: this.props.secondIcon
        }
    }
    render() {
        let secondIconTag = '';
        if (this.state.secondIcon) {
            secondIconTag = <Icon className={this.state.secondIcon}/>
        }
        if (!this.props.idText) {
            return (
                <Link className={this.state.classText} to={this.state.href}>
                    <Icon className={this.state.firstIcon}/>
                    {this.state.text}
                    {secondIconTag}
                </Link>
            )
        } else {
            return (
                <a className={this.state.classText} data-toggle="collapse">
                    <Icon className={this.state.firstIcon}/>
                    {this.state.text}
                    {secondIconTag}
                </a>
            )
        }
    }
}

class MenuLI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data || [],
            refText: this.props.refText || ('menu_' + Date.now())
        }
    }
    render() {
        let data = this.state.data;
        if (!data.text) {
            return;
        }
        let ulDom = '';
        let aDom = '';
        if (typeof data.items == 'object' && data.items.length > 0) {
            ulDom = <MenuUL data={data.items} classText="nav nav-list collapse" ref={this.state.refText}/>
            aDom = <MenuLink idText={this.state.refText} href={data.href} classText="nav-header collapsed" text={data.text} firstIcon={data.firstIcon} secondIcon={data.secondIcon} />
        } else {
            aDom = <MenuLink href={data.href} text={data.text}/>
        }
        return (
            <li>
                {aDom}
                {ulDom}
            </li>
        );
    }
}

class MenuUL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data || [],
            classText: this.props.classText
        }
    }
    render() {
        let itemElements = this.state.data.map((item, index) => (
            <MenuLI data={item} refText={'menu_' + index} key={index}/>
        ));
        return (
            <ul className={this.state.classText}>
                {itemElements}
            </ul>
        );
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: MenuStore.getAll() || [],
            menuStyle: {}
        }
    }
    render() {
        return (
            <div className="sidebar-nav">
                <MenuUL data={this.state.data}/>
            </div>
        );
    }
}

export default Menu
