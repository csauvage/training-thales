import React from "react";
import Film from "../../models/Films";
import FilmCard from "../FilmCard/FilmCard";
import './Home.sass';

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
            console.log(response.results)
            if(response.results.length > 0) {
                this.setState({films: response.results})
            }
        }


    }

    
    
    render() {
        return (
            <>
                <div className={"Search__section"}>
                    <input 
                        type={'search'}
                        value={this.state.searchValue}
                        onChange={this.searchFilms}
                        placeholder="Rechercher un film"
                    />
                </div>

                <div className="FilmList">
                    {this.state.films.map(f => <FilmCard key={f.id} film={f}/>)}
                </div>
            </>
        )
    }
}