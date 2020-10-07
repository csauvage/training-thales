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

    static async findDetails(movieId) {

        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
            params: {
                language: 'fr-FR',
                api_key: process.env.REACT_APP_TMBD_KEY
            },    
            headers: {
                    Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN,
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
        
        
        return response.data;


    }

    static async findCast(movieId) {

        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
            params: {
                language: 'fr-FR',
                api_key: process.env.REACT_APP_TMBD_KEY
            },    
            headers: {
                    Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN,
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
        
        
        return response.data;


    }


    static async getNowPlaying(movieId) {

        const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing`, {
            params: {
                language: 'fr-FR',
                api_key: process.env.REACT_APP_TMBD_KEY,
                region: 'FR'
            },    
            headers: {
                    Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN,
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
        
        
        return response.data;


    }



}