import React from 'react';
import './App.css';



// function declaration
function App() {
    // return JSX {
    return (
        <div>
            this is Ap
            <Rating />
            <Accordion />
        </div>
    );
}

function Rating() {
    // return JSX {
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    );
}

function Accordion() {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

function Star() {
    return (
        <div>
            star
        </div>
    );
}

export default App;























