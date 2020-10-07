import React from 'react';
import axios from 'axios';

export default class MovieList extends React.Component {




    async componentDidMount() {
        console.log('Component has been added to the dom') 

        // API Calls 

        try {
            
        } catch (error) {
            console.error(error)
        }


    }

    render() {

        console.log('Component is rendered') 

        return (
            <>
                <h1>Liste de films</h1>
            </>
        )
    }
}