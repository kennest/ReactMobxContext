import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthForm from "./components/AuthForm";
import Counter from "./components/Counter";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<AuthForm />} />
                        <Route path="/counter" element={<Counter />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </React.StrictMode>

    );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
