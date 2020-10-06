import React from 'react';
import './FilmCard.sass';

const FilmCard = ({film, favorite}) => {

    return (
        <div className={`FilmCard ${favorite ? 'FilmCard--Favorite' : ''}`.trimEnd()}>
            <image>
                <img src={"https://image.tmdb.org/t/p/original" + film.poster_path}/>
                <h1>{film.title}</h1>
            </image>
        </div>
    )

}

export default FilmCard

