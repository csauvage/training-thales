import React, {FormEvent, useRef} from 'react';
import { Country } from '../../models/Country';
import './PresidentForm.sass'
import {President} from '../App/App'

const PresidentForm = (props: {onAddPresident: (president: President) => void}) => {

    const firstname = useRef<HTMLInputElement | null>(null)
    const lastname = useRef<HTMLInputElement>(null!)
    // Whats's this ! after null ? 
    // Opérateur d'assertion non-null 
    const age = useRef<HTMLInputElement>(null!)
    const country =  useRef<HTMLSelectElement>(null!)

    const submitForm = (event: FormEvent): void => {
        event.preventDefault()
        
        console.log(firstname.current?.value)
        console.log(lastname.current?.value)
        console.log(age.current?.value)
        console.log(country.current?.value)

        let president: President = {
            firstname: firstname.current?.value as string,
            lastname: lastname.current?.value as string,
            age: parseInt(age.current?.value), 
            country: (country.current?.value as string) as Country
        }

        props.onAddPresident(president);
        
        // Je gère la situation 
    } 

    return(
        <div className="PresidentForm">
            <h1>Ajouter un président</h1>
            <hr/>
            <form onSubmit={e => submitForm(e)}>
                <label htmlFor="firstname">
                    Firstname
                    <input ref={firstname} type={"text"} name={"firstname"} required={true} id={"firstname"}/>
                </label>
                <label htmlFor="lastname">
                    Lastname
                    <input ref={lastname} type={"text"} name={"lastname"} required={true} id={"lastname"}/>
                </label>
                <label htmlFor="age">
                    Age
                    <input ref={age} type={"number"} name={"age"} required={true} max={80} id={"age"}/>
                </label>
                <label>
                    Pays
                    <select ref={country}>
                        {Object.keys(Country).map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                </label>

                <input type="submit" value="Ajouter président"/>

            </form>
            

        </div>
    )

}

export default PresidentForm
