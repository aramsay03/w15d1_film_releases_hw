import React, { Component } from 'react';

class UpComing extends Component {
    render() { 
        return ( 
            <div>
                <a href={this.props.url} target="blank">{this.props.children}</a>
            </div>
         );
    }
}
 
export default UpComing;