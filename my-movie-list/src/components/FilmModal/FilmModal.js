import React, { useEffect, useState } from "react"
import PropTypes from "prop-types";
import './FilmModal.sass';
import Film from "../../models/Films";
import FilmCrew from '../FilmCrew/FilmCrew'

const FilmModal = (props) => {

    const [film, setFilm] = useState(props.film);
   

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



    return (
        <div className={"FilmModal"}>
            
            <div 
                className="FilmModal__Header" style={{
                    backgroundImage: `url('https://image.tmdb.org/t/p/original${props.film.backdrop_path}')`
                }}>
                    <span onClick={props.closeModal}>&times;</span>
                    {film.title}
                </div>
            <div className={"FilmModal__Crew"}>
                {film.cast ? film.cast.map(actor => <FilmCrew person={actor}/>) : null}
            </div>
        </div>
    )
}

FilmModal.propTypes = {
    film: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
}

export default FilmModal