import React from "react";

export default class CounterClass extends React.Component{
    state = {
        counterValue: 1
    }

    constructor(props) {
        super(props);
        console.log("init CounterClass");
    }

    increment = () => {
        console.log("CounterClass: call increment function");

        if (this.state.counterValue < this.props.max) {
            this.setState({counterValue: this.state.counterValue + 1});
        }        
    }

    render() {
        return <div>
            <span>{ this.state.counterValue }</span>
            <button type="button" onClick={this.increment}> + </button>
        </div>
    }
};