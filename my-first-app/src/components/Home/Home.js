import React, {Component} from 'react';
import Person from '../../models/Person';
import MovieList from '../MovieList/MovieList';
import User from '../User/User';
import './Home.sass';

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.presidents = [
            new Person('Georges Sr', 'Cimetiere', 94),
            new Person('Billou', 'Washington', 74),
            new Person('Georges Jr.', 'Washington', 74),
            new Person('Barrack', 'Washington', 59),
            new Person('Donald', 'Washington', 74),
            new Person('Bernie', 'Washington', 79),
        ]

        this.state = {
            searchQuery: '',
            presidents: this.presidents
        }

        

        this.changeInput = this.changeInput.bind(this);


    }

    changeInput(event) {

        let searchQuery = event.target.value
        let presidents = []

        if(searchQuery.length !== 0) {
            presidents = this.presidents.filter(president => {
                console.log(president.name.includes(searchQuery) ? president.name : '')
                return president.name.includes(searchQuery)
            });
        } else {
            presidents = this.presidents
        }

        this.setState({searchQuery, presidents});

    }

    render() {

        // Props : propriété 

        const {presidents, searchQuery} = this.state

        return (<MovieList/>)

        /*return (
            <>
                <div className="Home">
                    Leak'in profile 💦

                    <input
                        value={searchQuery}
                        placeholder={"Search"}
                        className={"Home__Input"} 
                        type={"text"}
                        onChange={(event) => this.changeInput(event)}
                    />

                    { presidents.map(p => <User key={p.name} isCurrent={p.name === 'Donald'} person={p}/>) }
                </div>
            </>
        )*/

    }

}

