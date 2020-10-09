import React, { useState, useEffect } from 'react';
import { Country } from '../../models/Country';
import PresidentForm from '../PresidentFrom/PresidentForm';
import PresidentProfile from '../PresidentProfile/PresidentProfile';
import './App.sass';

export interface President {
    firstname: string,
    lastname: string,
    age: number,
    country: Country,
}

const App: React.FC = () => {


    const [presidents, setPresidents] = useState<President[]>([])

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

    useEffect(() => {
        setPresidents([trump, macron])
        
    }, [])

    const addPresident = (president: President) : void => {
        const presidentsState = presidents;
        presidentsState.push(president);
        setPresidents(presidentsState)
    }

    return (
        <div className="App">
            <h1>This is my typed component</h1>
            <PresidentForm onAddPresident={addPresident}/>
            <>
                {presidents.map((p: President) => {
                    return <PresidentProfile status={"En Activité"} firstname={p.firstname} lastname={p.lastname} pays={p.country} age={p.age}/> 
                })}

                
            </>
        </div>
    )
}

export default App

/*

1. Balises orpheline : <br/> <hr/> 
2. Balises de pairs : <p></p> <strong></strong>

*/