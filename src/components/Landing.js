import React, { Component } from 'react';

import {connect} from 'react-redux'

import SearchForm from './SearchForm'
import MoviesContainer from './MoviesContainer'

export class Landing extends Component {
    render() {
        const {loading} = this.props
        return (
            <div>
                <h1 className="titulo">Buscador de peliculas</h1>
                <SearchForm/>
                <MoviesContainer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Landing);