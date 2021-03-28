import {SEARCH_MOVIE , FETCH_MOVIES} from './types'
import axios from 'axios'

import {APIkey} from '../APIkey'

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE, 
        payload: text
    })
}

export const fetchMovies = (text) => dispatch => {
    axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=${APIkey}&query=${text}`)
        .then(response => 
            dispatch({
            type: FETCH_MOVIES, 
            payload: response.data.results
        }))
        .catch(err => console.log(err))
}


