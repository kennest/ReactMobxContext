import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CounterDisplay from "./components/CounterDisplay";
import CounterActions from "./components/CounterActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthForm from "./components/AuthForm";

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <div className="App">
                    <AuthForm />
                </div>
            </BrowserRouter>
        </React.StrictMode>

    );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
