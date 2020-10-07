import React from "react"
import "./FilmCrew.sass"

const FilmCrew = (props) => {

    const person = props.person

    return (
        <div className={"FilmCrew"}>
            <img src={person.profile_path ?  `https://image.tmdb.org/t/p/original${person.profile_path}` : `https://api.adorable.io/avatars/285/${props.person.name.toLowerCase().replace(/\s/g, '-')}.png`}/>
            <h3>{person.name}</h3>
            <h4>{person.character}</h4>
        </div>
    )

    /*
    
    cast_id: 6
character: "Tintin (voice)"
credit_id: "52fe47349251416c75091443"
gender: 2
id: 478
name: "Jamie Bell"
order: 0
profile_path: "/7FZD8IfUO0aKyletU4bkEYgaI1Y.jpg"

    */
}

export default FilmCrew
