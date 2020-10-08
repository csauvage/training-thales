import React from 'react';
import './FilmCard.sass';
import noMoviesImage from  '../../no-movie.png'
import {AiFillStar} from 'react-icons/ai'

const FilmCard = ({film, favorite, onCardClick, isFavorited}) => {

    return (
        <div onClick={_ => onCardClick(film)} className={`FilmCard ${favorite ? 'FilmCard--Favorite' : ''}`.trimEnd()}>
            {isFavorited ? <div className={'FilmCard__Tag'}>
                <AiFillStar/> Favoris 
            </div> : null}
            <figure>
                <img src={!!film.poster_path ? "https://image.tmdb.org/t/p/original" + film.poster_path : noMoviesImage}/>
                <h1>{film.title}</h1>
            </figure>
        </div>
    )

}

export default FilmCard

