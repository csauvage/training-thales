import React, {Component, Fragment} from 'react';
import Person from '../../models/Person'
import './User.sass'
import {Chance} from 'chance';

const chance = new Chance();


const UserProfile = (props) => {
    
    const changeAge = () => {
        // ES6 : Object destructuring 
        //const { person } = this.state 
        // const person = this.state.person; 
         
        //person.age = chance.age({type: 'senior'}); 
        //this.setState({ person /* : person */ });
        console.log(chance.age({type: 'senior'}))

    }

    return (
        <div className={`User ${props.isCurrent ? "User--current" : ''}`.trimEnd()}>
            <span><img className="User__ProfilePicture" src={`https://api.adorable.io/avatars/240/${props.person.name}`} alt="Profile image"/></span>
            <span><strong>Person :</strong> {props.person.name}</span>
            <span><strong>City :</strong> {props.person.city} <br/></span>
            <span><strong>Age :</strong> {props.person.age} <br/></span>
            <button onClick={_ => changeAge()}>Random age</button>
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

} */

