import React from 'react';
import Review from './review';
import StarRating from './star-rating';

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userValue: '',
            reviewValue: '',
            ratingValue: undefined
        };
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangeReview = this.handleChangeReview.bind(this);
        this.handleChangeRating = this.handleChangeRating.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUser(event) {
        this.setState({userValue: event.target.value});
    }
    
    handleChangeReview(event) {
        this.setState({reviewValue: event.target.value});
    }

    handleChangeRating(index) {
        this.setState({ratingValue: index});
    }

    handleSubmit(event) {
        //alert(`A review was submitted by ${this.state.userValue}`);
        let newReview = {user: this.state.userValue, 
                review: this.state.reviewValue, 
                rating: this.state.ratingValue};
        this.props.reviews.push(newReview);
        this.setState({userValue: '', reviewValue: '', ratingValue: undefined},() => {console.log(this.state)});
        event.preventDefault();
    }

    render(){
        return (
            <div className="container">
                <h4 className="result">Reviews</h4>
                {this.props.reviews.map((review , i) => {
                    return (
                        <div key={i} className="border border-primary">
                        <br></br>
                        <Review index={i} user={review.user} review={review.review} rating={review.rating}/>
                        </div>
                    )
                })}
                <div className="card">
                    <br></br>
                    <form className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        <div className="row">
                        <label>
                            User:
                            <input type="text"  value={this.state.userValue} name="user" className="form-control" placeholder="Enter User name" onChange={this.handleChangeUser}/>
                        </label>
                        <label>
                          Review:
                            <textarea value={this.state.reviewValue} className="form-control" onChange={this.handleChangeReview} />
                        </label>
                        </div>
                        <div className="row">
                        <StarRating gradeIndex={this.state.ratingValue} setGradeIndex={this.handleChangeRating}/>
                        </div>
                        <div className="row">
                        <input type="submit" value="Submit" />
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}