import axios from "axios";
require('dotenv').config()

export default class Film {

    constructor() {

    }

    static async search(query) {

        const response = await axios.get('https://api.themoviedb.org/4/search/movie', {
            params: {
                language: 'fr-FR',
                query
            },    
            headers: {
                    Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN,
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
        
        return response.data;


    }



}