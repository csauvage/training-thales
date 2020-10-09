import React, { useState, useEffect } from 'react';
import './App.sass';

const App = (props: {}) => {

    const [hour, setHour] = useState<number>(new Date().getHours())
    const [minute, setMinutes] = useState<number>(new Date().getMinutes())
    const [seconds, setSeconds] = useState<number>(new Date().getSeconds())

    useEffect(() => {
        setInterval(() => {
            setHour(new Date().getHours())
            setMinutes(new Date().getMinutes())
            setSeconds(new Date().getSeconds())
        }, 1000);
        
    }, [])



    return (
        <div className="App">
            <h1>Bonjour, il est {hour}:{minute}:{seconds} </h1>
        </div>
    )

}

export default App