import React from 'react'

class Icon extends React.Component {
    render() {
        if (!this.props.className) {
            return null;
        }
        return <i className={this.props.className}></i>
    }
}

export default Icon
