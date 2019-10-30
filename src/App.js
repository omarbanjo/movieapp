import React, {Component} from "react";
import NameFilter from './NameFilter'
import RatingFilter from './RatingFilter'
import MovieList from './MovieList'
import './App.css'

const inception = {
  id: 'inception',
  title: 'Inception',
  rating: 3,
  image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg',
  year: 2010}

const shawshank = {
    id: 'shawshank',
    title: 'Shawshank Redemption',
    year: 1994,
    rating: 4,
    image:'https://images-na.ssl-images-amazon.com/images/I/5104HNGW6NL._SY445_.jpg'
}

const joker = {
  id: 'joker', 
  title: 'Joker', 
  rating: 5, 
  year: 2019,
  image:'https://parismatch.be/app/uploads/2019/07/joker-1100x715.jpg'

}

const moviesToDisplay = [joker, inception, shawshank]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minRatingFilter: 3,
      movies: moviesToDisplay,
      titleFilter: ''
    }
  }
  
  getVisibleMovies() {
    return this.state.movies.filter(
      el =>
        el.rating >= this.state.minRatingFilter &&
        el.title.toLowerCase().includes(
          this.state.titleFilter.toLowerCase().trim()
        )
      )
  }
  render() {
    return (
      <div className="movie-app">
        <header className="movie-app-header">
          <NameFilter
            value={this.state.titleFilter}
            onChange={(newTitleFilter) => {
              this.setState({
                titleFilter: newTitleFilter
              })
            }} />
          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={(newRating) => {
              this.setState({
                minRatingFilter: newRating
              })
            }} />
        </header>
        <main className="movie-app-main">
            <MovieList
              movies={
                this.getVisibleMovies()
              } />
        </main>
      </div>
    )
  }
}

export default App;
