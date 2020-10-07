import React from 'react';
import './FilmCard.sass';
import noMoviesImage from  '../../no-movie.png'

const FilmCard = ({film, favorite}) => {

    return (
        <div className={`FilmCard ${favorite ? 'FilmCard--Favorite' : ''}`.trimEnd()}>
            <image>
                <img src={!!film.poster_path ? "https://image.tmdb.org/t/p/original" + film.poster_path : noMoviesImage}/>
                <h1>{film.title}</h1>
            </image>
        </div>
    )

}

export default FilmCard

