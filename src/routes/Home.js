import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HeaderImg, Searchbar, PosterList, LoadButton } from '../components'

import { getMovies } from '../actions/movie';

const movies = [
    {
    backdrop_path: './images/Fast_small.jpg',
    id: 475556,
    overview: "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
    poster_path: './images/Fast_small.jpg',
        title: "Joker"
    },
    {
        backdrop_path: './images/Fast_large.jpg',
        id: 475557,
        overview: "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
        poster_path: './images/Fast_small.jpg',
        title: "Joker"
    },
    {
        backdrop_path: './images/Fast_small.jpg',
        id: 475558,
        overview: "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
        poster_path: './images/Fast_small.jpg',
        title: "Joker"
    },
    {
        backdrop_path: './images/Fast_large.jpg',
        id: 475559,
        overview: "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
        poster_path: './images/Fast_small.jpg',
        title: "Joker"
    },
    {
        backdrop_path: './images/Fast_small.jpg',
        id: 475555,
        overview: "Dans les annÈes 1980, ‡ Gotham City, Arthur Fleck, un humoriste de stand-up ratÈ, bascule dans la folie et devient le Joker.",
        poster_path: './images/Fast_small.jpg',
        title: "Joker"
    }
];
    
class HomeComponent extends Component {
    componentDidMount() {
        this.props.getMovies()
    }
    render(){
        const {mTitle, mDesk, image, movies, loading} = this.props
        return(
            <div>
                <HeaderImg 
                    title={ mTitle }
                    overview={ mDesk }
                    imgSrc={ image }
                />
                <Searchbar onSearchClick = { this.props.onSearchClick }/>
                <PosterList movies={ movies } localMovies={this.props.localMovies} />
                <LoadButton 
                    loading={ loading } 
                    onButtonClick= { this.props.onButtonClick }
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        localMovies: state.movies.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovies: () => dispatch(getMovies())
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)

export { Home }