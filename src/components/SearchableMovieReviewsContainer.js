import React, { Component } from 'react';
import 'isomorphic-fetch';
import { render } from 'enzyme';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'LKtyb7YghPOCFUEouw6EVCk89QL1KL4P';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
     

  render() {
     return (
     <div className="lastest-movie-reviews">
      
     </div>
     )
    }
}



export default SearchableMovieReviewsContainer;