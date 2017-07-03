import React, { Component } from 'react';
import './HelloWorld.css';



class HelloWorld extends Component {
    constructor(props) {
    super(props);
    this.state = {greeting: 'Hello'};
    this.frenchify = this.frenchify.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
}
    removeGreeting() {
        this.props.removeGreeting(this.props.name);
    }

    frenchify() {
        this.setState({ greeting: "That's a French ass name "});
    }

    render() {
        return (
            <div className="HelloWorld">
                {this.state.greeting} {this.props.name}!
                <br />
                <button onClick = {this.frenchify}>French that Shit!</button>
                <br />
                <button onClick = {this.removeGreeting}>F*ck this fool!</button>
            </div>
        );
    }
}

export default HelloWorld;