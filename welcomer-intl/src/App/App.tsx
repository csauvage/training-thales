import React, { useState, useEffect } from 'react';
import './App.sass';
import { useTranslation } from 'react-i18next';
import {TranslationKeys} from '../services/traductions/TrKeys' 

const App = (props: {}) => {

    const  { t } = useTranslation()

    const [hour, setHour] = useState<number>(new Date().getHours())
    const [minute, setMinutes] = useState<number>(new Date().getMinutes())
    const [seconds, setSeconds] = useState<number>(new Date().getSeconds())

    const [firstname, setFirstname] = useState("Clement")

    useEffect(() => {
        setInterval(() => {
            setHour(new Date().getHours())
            setMinutes(new Date().getMinutes())
            setSeconds(new Date().getSeconds())
        }, 1000);
        
    }, [])

    const customer = {
        firstname: "Clément",
        roomNumber: 404
    }

    const baguetteCount = 5

    return (
        <div className="App">
            <h1>{ t(TranslationKeys.Bonjour, {customer}) }, {t(TranslationKeys.IlEst)} {hour}:{minute}:{seconds} </h1><br/>
            <input value={firstname} onChange={e => setFirstname(e.target.value)}/>

            <div className="App__Menu">
                <h2> Menu du petit déjeuner</h2>

                <ul>
                    <li>🥖 {baguetteCount} {t(TranslationKeys.MenuBreadCount, {count: baguetteCount})}</li>
                </ul>

            </div>
        </div>
    )

}

export default App