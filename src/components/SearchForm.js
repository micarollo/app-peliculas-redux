import React, { Component } from 'react';

import {connect} from 'react-redux'

import { searchMovie , fetchMovies} from '../actions/searchActions'

export class SearchForm extends Component {
    onChange = (e) => {
        this.props.searchMovie(e.target.value);
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.fetchMovies(this.props.text)
    }
    
    render(){
        return(
            <div className="header">
                <form onSubmit={this.onSubmit}>
                    <input className="search" 
                    type="text"
                    name="searchText" 
                    placeholder="Buscar..." 
                    onChange={this.onChange}
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    text: state.movies.text
})

export default connect(
    mapStateToProps, 
    {searchMovie, fetchMovies}
)(SearchForm)