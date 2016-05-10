import React from 'react'
import Icon from './Icon'

class HeadSearch extends React.Component {
    render() {
        return (
            <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-addon">
                            <Icon className="glyphicon glyphicon-search"/>
                        </div>
                        <input className="form-control" type="text" name="name" placeholder="Search Service Orders" style={{'width': '250px'}} />
                    </div>
                    <button type="submit" className="btn btn-info" style={{'marginLeft': '5px'}}>Search</button>
                </div>
            </form>
        );
    }
}

export default HeadSearch
