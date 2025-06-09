
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    // creating states of the component
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      // updating the states when a certain thing happens
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));  
      },

      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));

      }
    };

  }
  render() {
    return (
     <div className='content-rating'>
        <p>  
          Click on any rating button below and observe the number of clicks.
        </p>
        <div className='rating-buttons'>

          <button className="like-button"  onClick={this.state.handleLike}>
              Like ({this.state.likes})
          </button>
          <button className="dislike-button"  onClick={this.state.handleDislike}>
              Dislike ({this.state.dislikes})
          </button>

        </div>
         <p>Total Ratings: {this.state.totalRatings}</p>
     </div>
    );
  }
}

export default ContentRating;
