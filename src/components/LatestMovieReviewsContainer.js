import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'LKtyb7YghPOCFUEouw6EVCk89QL1KL4P';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
  class LatestMovieReviewsContainer extends Component {
     constructor() {
       super();
        
        this.state = {
         reviews: []
        };
     }
     
     componentDidMount() {
         fetch(URL)
         .then(response => response.json())
         .then(reviewData => this.setState({ reviews: reviewData.results}))
         
     }


     render() {
        
       return (
        <div className="latest-movie-reviews">
          <h2>The Latest Reviews:</h2>
          <MovieReviews reviews={this.state.reviews} /> 
        </div>
        )
       
       }


  }

  export default LatestMovieReviewsContainer;