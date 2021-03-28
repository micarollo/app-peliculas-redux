import React, { Component} from 'react';


export class MovieCard extends Component {
    render(){
        const IMG_API = "https://image.tmdb.org/t/p/w1280"
        const {movie} = this.props

        return(
            <div className="movie">
            <img src={IMG_API + movie.poster_path} alt={movie.title}/>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <span>{movie.vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{movie.overview}</p>
            </div>
        </div>
        )
    }
}

export default MovieCard