import React, { useContext } from "react";
import { observer } from "mobx-react";
import CounterContext from "../stores/CounterStore";

const CounterStore = () => {
    const store = useContext(CounterContext);

    return (
        <div>
            <h1>
                Counter: <span>{store.counter}</span>
            </h1>
        </div>
    );
};

/* You DO NEED observer here in order to "react"
when store.counter updates
*/
export default observer(CounterStore);
