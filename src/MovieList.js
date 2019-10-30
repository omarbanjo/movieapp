import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => (
     <div className="movie-list">
        {
            props.movies.map(el => <MovieCard key={el.id} movie={el} />)
        }
        <div className="new-movie-card">+</div>
      </div>
)

export default MovieList