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
            films: []
        }

        this.searchFilms = this.searchFilms.bind(this)
    }
    
    async componentDidMount() {

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
                                    onCardClick={f => this.handleClick(f)}/>)}
                </div>


                <Modal 
                    className="Modal" 
                    overlayClassName="ModalOverlay" 
                    isOpen={this.state.modalOpened}
                    onScroll={e => e.stopPropagation()}
                    >
                    
                    <FilmModal 
                        film={this.state.currentFilm}
                        closeModal={_ => this.setState({modalOpened: false})}
                    />

                </Modal>
            </>
        )
    }

}

