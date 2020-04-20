import React, { Component } from 'react';

class Film extends Component {
    
    render() { 
        return ( 
            <li className="film">
                <a href={this.props.url} target="blank"><h4>{this.props.children}</h4></a>
            </li>
         );
    }
}
 
export default Film;