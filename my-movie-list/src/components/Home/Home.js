import React from "react";
import Film from "../../models/Films";
import FilmCard from "../FilmCard/FilmCard";

export default class Home extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
            films: []
        }

        this.searchFilms = this.searchFilms.bind(this)
    }

    async searchFilms(e) {
        
        const searchValue = e.target.value    

        this.setState({searchValue})

        if(searchValue.length > 3) {
            let response = await Film.search(searchValue);
            if(response.results.length > 0) {
                this.setState({films: response.results})
            }
        }


    }

    showFilms(film) {
        const basePath =  + film.poster_path

        return (
            <div>
                <img style={{height: 200, borderRadius: 5}} src={basePath}/>
                <h2>{film.title}</h2>
            </div>
        )

    }
    
    render() {
        return (
            <>
                <input 
                    type={'search'}
                    value={this.state.searchValue}
                    onChange={this.searchFilms}
                />

                <div className="FilmList" style={{flexDirection: "row", justifyItems: "center"}}>
                    {this.state.films.map(f => <FilmCard film={f}/>)}
                </div>
            </>
        )
    }
}