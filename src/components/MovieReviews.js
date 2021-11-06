// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => (
 <div className="review-list"> 
    {props.reviews.map((r, id)  => (
       
        <div key={id}> <h2>Title: {r.display_title}</h2> <blockquote>{r.summary_short}</blockquote> <span>Review by: {r.byline} </span></div>
       
    
  
    
))}
    
        

 </div>
)



export default MovieReviews; 