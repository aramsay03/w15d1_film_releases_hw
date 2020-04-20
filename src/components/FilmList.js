import React, { Component } from 'react';
import Film from './Film';

class FilmList extends Component {
    render() { 
        const filmNodes = this.props.films.map((film, url) => {
            return ( 
                <Film name={film.name} url={film.url}>{film.name}</Film>
            );
        });

        return ( 
            <ul className="film-list">
                {filmNodes}
            </ul>
        );
    }
}
 
export default FilmList;