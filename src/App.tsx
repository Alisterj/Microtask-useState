import React, {useState} from 'react';
import './App.css';

function App() {
    const [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(a + 1)
    }
    const onClickZeroingOut = () => {
        setA(0)
    }
    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickZeroingOut}>0</button>
        </div>
    );
}

export default App;
