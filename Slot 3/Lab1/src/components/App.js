import React, { Component } from "react";

import './App.css';
import HelloWorld from "./HelloWorld.jsx";
import Person from "./person";

const person = new Person("John", 25);

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <HelloWorld />
                {person.sayHello()}
            </div>
        );
    }
}

export default App;
