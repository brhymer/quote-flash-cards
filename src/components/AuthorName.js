import React, { Component } from 'react';

class Authorname extends Component {
    render(props) {
        return (
            <div className="answer">
                <input type="radio" id={this.props.author} name="answer" value={this.props.author} />
                <label htmlFor={this.props.author}>{this.props.author}</label>
            </div>
        );
    }
}

export default Authorname;
