import { observable, decorate, action } from "mobx";
import { createContext } from "react";

class CounterStore {
    counter = 0;

    incrementOne = () => {
        this.counter++;
    };

    decrementOne = () => {
        this.counter--;
    };
}

/* We have to say to Mobx what types we have in the store */
decorate(CounterStore, {
    /* State must be always observable 👀 */
    counter: observable,
    /* This will be observable through who wants to */
    /* methods which touches state (counter in this case) must be an action */
    incrementOne: action,
    decrementOne: action
});

/* Combine Mobx state+actions with context API */
const CounterContext = createContext(new CounterStore()); // Instanciate the store is MUST
CounterContext.displayName = "CounterContext"; // Just give a better name to debug

export default CounterContext;
