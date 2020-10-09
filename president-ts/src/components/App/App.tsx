import React from 'react';
import { Country } from '../../models/Country';
import PresidentProfile from '../PresidentProfile/PresidentProfile';
import './App.sass';

const App: React.FC = () => {

    const macron = {
        firstname: "Emmanuel",
        lastname: "Macron",
        country: Country.FRA,
        age: 49
    }

    const trump = {
        firstname: "Donald",
        lastname: "Trump",
        country: Country.USA,
        age: 74
    }

    return (
        <div className="App">
            <h1>This is my typed component</h1>
            <>
                <PresidentProfile status={"En Activité"} firstname={"Emmanuel"} lastname={"Macron"} pays={Country.FRA} age={macron.age}/>
                <PresidentProfile status={"Sur le départ"} firstname={"Donald"} lastname={"Trump"} pays={Country.USA} age={trump.age}/>
            </>
        </div>
    )
}

export default App