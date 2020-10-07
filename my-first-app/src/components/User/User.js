import React, {Component, Fragment, useState} from 'react';
import Person from '../../models/Person'
import './User.sass'
import {Chance} from 'chance';

const chance = new Chance();


const UserProfile = ({person, isCurrent}) => {

    // Hooks
    // Hooks d'état 
    //const [person, setPerson] = useState(personProps);
    const [personState, setPerson] = useState(person);

    const changeAge = () => {
        
        
        const age = chance.age({type: 'senior'});
        setPerson(Object.assign(new Person(), personState, { age }))
        
    }

    const changeCity = () => {
        const city = chance.city();
        setPerson(Object.assign(new Person(), personState, { city }))
    }

    return (
        <div className={`User ${isCurrent ? "User--current" : ''}`.trimEnd()}>
            <span><img className="User__ProfilePicture" src={`https://api.adorable.io/avatars/240/${personState.name}`} alt="Profile image"/></span>
            <span><strong>Person :</strong> {personState.name}</span>
            <span><strong>City :</strong> {personState.city} <br/></span>
            <span><strong>Age :</strong> {personState.age} <br/></span>
            <span>
                <button onClick={_ => changeAge()}>Random age</button><br/>
                <button onClick={_ => changeCity()}>Random city</button>
            </span>
            
        </div>
    )
}

export default UserProfile


/*export default class User extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            person: props.person,
            isCurrent: props.isCurrent
        }

        this.changeAge = this.changeAge.bind(this)
    }

    changeAge() {
        // ES6 : Object destructuring 
        const { person } = this.state 
        // const person = this.state.person; 
         
        person.age = chance.age({type: 'senior'}); 
        this.setState({ person });
     
        // ES6 : Object litterals 
    }

    render() {

        const { person, isCurrent } = this.state 

        const {name, age} = person

        return (
            <div className={`User ${isCurrent ? "User--current" : ''}`.trimEnd()}>
                <span><img className="User__ProfilePicture" src={`https://api.adorable.io/avatars/240/${person.name}`} alt="Profile image"/></span>
                <span><strong>Person :</strong> {name}</span>
                <span><strong>City :</strong> {person.city} <br/></span>
                <span><strong>Age :</strong> {age} <br/></span>
                <button onClick={_ => this.changeAge()}>Random age</button>
            </div>
        )
    }

}

*/