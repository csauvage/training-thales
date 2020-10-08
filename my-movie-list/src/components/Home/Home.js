import React from "react";
import Modal from "react-modal";
import Film from "../../models/Films";
import FilmCard from "../FilmCard/FilmCard";
import FilmModal from "../FilmModal/FilmModal";
import './Home.sass';


Modal.setAppElement('#root')

export default class Home extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
            currentFilm: {},
            modalOpened: false,
            films: [],
            favoritesFilms : []
        }

        this.searchFilms = this.searchFilms.bind(this)
    }
    
    async componentDidMount() {

        const jsonFav = window.localStorage.getItem('@MyMovieList::Favorites');
        if(jsonFav) {
            this.setState({favoritesFilms: JSON.parse(jsonFav)}, _ => console.log(this.state.favoritesFilms));
        }

        const nowPlaying = await Film.getNowPlaying();
        if(nowPlaying.results.length > 0) {
            this.setState({films: nowPlaying.results})
        }

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

    handleClick(film) {

        const {modalOpened} = this.state

        console.log('Clic sur ' + film.title)
        this.setState({modalOpened: !modalOpened, currentFilm: film})
    }

    addToFavorites(film) {

        const {favoritesFilms} = this.state;
        favoritesFilms.push(film.id);
        this.setState({favoritesFilms}, () => {
            window.localStorage.setItem('@MyMovieList::Favorites', JSON.stringify(this.state.favoritesFilms))
        });

    }

    removeFromFavorites(film) {
        const {favoritesFilms} = this.state;
        this.setState({favoritesFilms: favoritesFilms.filter(f => f !== film.id)}, () => {
            window.localStorage.setItem('@MyMovieList::Favorites', JSON.stringify(this.state.favoritesFilms))
        })
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
                    {this.state.films.map(f => 
                        <FilmCard key={f.id} 
                                    film={f}
                                    isFavorited={this.state.favoritesFilms.includes(f.id)} 
                                    onCardClick={f => this.handleClick(f)}/>)}
                </div>


                <Modal 
                    className="Modal" 
                    overlayClassName="ModalOverlay"
                    isOpen={this.state.modalOpened}
                
                    >
                    
                    <FilmModal 
                        film={this.state.currentFilm}
                        closeModal={_ => this.setState({modalOpened: false})}
                        addToFavorites={film => this.addToFavorites(film) }
                        removeFromFavorites={film => this.removeFromFavorites(film)}
                        isFavorited={this.state.favoritesFilms.includes(this.state.currentFilm.id)}
                    />

                </Modal>
            </>
        )
    }

}

