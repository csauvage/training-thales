import axios from "axios";

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
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2E3MDMzMGNmNWMyOGI1MjA2YjRhNTI5YTkyMmQwNiIsInN1YiI6IjVmN2M1YjA0MzVjMzBhMDAzNjcwNWRhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D_KaXWE7KERtKauiFULMw9Mb6Zjl4swJ7Wb6LExW2t8',
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
        
        return response.data;


    }



}