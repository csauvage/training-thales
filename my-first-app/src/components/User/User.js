import React, {Component, Fragment} from 'react';
import Person from '../../models/Person'
import './User.sass'
import {Chance} from 'chance';

const chance = new Chance();

export default class User extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            person: props.person,
            isCurrent: false
        }

        this.changeAge = this.changeAge.bind(this)
    }

    changeAge() {
        // ES6 : Object destructuring 
        const { person, isCurrent } = this.state 
        // const person = this.state.person; 
         
        person.age = chance.age({type: 'senior'}); 
        this.setState({ person /* : person */ });
     
        // ES6 : Object litterals 
    }

    render() {
        return (
            <div className={"User"}>
                <span><img className="User__ProfilePicture" src={`https://api.adorable.io/avatars/240/${this.state.person.name}`} alt="Profile image"/></span>
                <span><strong>Person :</strong> {this.state.person.name}</span>
                <span><strong>City :</strong> {this.state.person.city} <br/></span>
                <span><strong>Age :</strong> {this.state.person.age} <br/></span>
                <button onClick={_ => this.changeAge()}>Random age</button>
            </div>
        )
    }

} 

