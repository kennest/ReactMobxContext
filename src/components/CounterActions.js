import React, { Component } from "react";
import CounterContext from "../stores/CounterStore";

// or less ideally
import { Button } from 'react-bootstrap';
/* Use class component here does not makes sense.
Just want to show how to use our Mobx Context with a class component
in case you do need.
*/
class CounterActions extends Component {
    /* Make available the context to the whole class via this.context */
    static contextType = CounterContext;

    specialDecrement = () => {
        this.context.decrementOne();
    };

    specialIncrement = () => {
        this.context.incrementOne();
    };

    render() {
        return (
            <div>
                <Button onClick={this.specialIncrement} variant="outline-primary">+</Button>
                <Button onClick={this.specialDecrement} variant="outline-danger">-</Button>
            </div>
        );
    }
}

export default CounterActions;
