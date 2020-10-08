import React, { useEffect, useState } from "react"
import PropTypes from "prop-types";
import {AiOutlineEye, AiOutlineEyeInvisible, AiFillStar, AiOutlineStar} from 'react-icons/ai'

import './FilmModal.sass';
import Film from "../../models/Films";
import FilmCrew from '../FilmCrew/FilmCrew'


const FilmModal = (props) => {

    const [film, setFilm] = useState(props.film);
    const [castIsShown, showCast] = useState(false);
   

    useEffect(() => {

        const fetchMovieDetails = async (filmId) => {
            
            
            
            let details = await Film.findDetails(film.id);
            setFilm(details)

            let {crew, cast} = await Film.findCast(film.id);
            console.log( cast )
            let detailedFilm  = {
                ...film,
                details,
                cast,
                crew
            };

            setFilm(detailedFilm);
            
        }

        fetchMovieDetails(props.film);

    }, [])

    const renderCast = (cast) => {
        return (
            <div className={"FilmModal__Crew"}>
                {cast ? cast.map(actor => <FilmCrew person={actor}/>) : null}
            </div>
        )
    }

    const renderAddToFavButton = (isFavorited) => {

       return isFavorited ?
       <button onClick={ () => { props.removeFromFavorites(film) } }>
          <AiOutlineStar/> Retirer des favoris
       </button> :
       <button onClick={ () => { props.addToFavorites(film) } }>
        <AiFillStar/> Ajouter aux favoris   
        </button>
    
    }

    return (
        <div className={"FilmModal"} onScroll={e => e.stopPropagation()}>
            
            <div 
                className="FilmModal__Header" style={{
                    backgroundImage: `url('https://image.tmdb.org/t/p/original${props.film.backdrop_path}')`
                }}>
                    <span onClick={props.closeModal} className="FilmModal__Close">&times;</span>
                    <h1 style={{color: "white", fontSize: "4em"}}>{film.title}</h1>
                </div>
            <br/>
            <br/>
            { renderAddToFavButton(props.isFavorited) }
            <br/>
            <br/>
            <span onClick={_ => showCast(!castIsShown)}> 
                {castIsShown ? 
                    <><AiOutlineEyeInvisible/> Hide Cast</> : 
                    <><AiOutlineEye/> Show Cast </>
                } 
            </span> 
            {castIsShown ? renderCast(film.cast) : null}
        </div>
    )
}

FilmModal.propTypes = {
    film: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
    addToFavorites: PropTypes.func,
    removeFromFavorites: PropTypes.func,
    isFavorited: PropTypes.bool,
}

FilmModal.defaultProps = {
    addToFavorites: (film) => { console.log(`Attempt to add ${film.title} to favorites`)},
    removeFromFavorites: () => {},
    isFavorited: false
}

export default FilmModal