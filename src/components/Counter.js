import React from "react";

import CounterDisplay from "./CounterDisplay";
import CounterActions from "./CounterActions";
import { Link } from "react-router-dom";


const Counter = () => {

    return (
        <div >
            <CounterDisplay />
            <CounterActions />
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
};

/* You DO NEED observer here in order to "react"
when store.counter updates
*/
export default Counter;



