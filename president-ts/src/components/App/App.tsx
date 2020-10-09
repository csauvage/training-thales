import React from 'react';
import { Country } from '../../models/Country';
import PresidentProfile from '../PresidentProfile/PresidentProfile';
import './App.sass';

const App: React.FC = () => {
    return (
        <div className="App">
            This is my typed component
            <>
                <PresidentProfile firstname={"Emmanuel"} lastname={"Macron"} pays={Country.FRA} />
                <PresidentProfile firstname={"Donald"} lastname={"Trump"} pays={Country.USA} />
            </>
        </div>
    )
}

export default App