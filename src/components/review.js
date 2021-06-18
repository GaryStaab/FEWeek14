import React from 'react';
import StarRating from './star-rating';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header bg-success text-white result">
                    <h5 className="result">Review user: {this.props.user}</h5>
                </div>
                <div className="card-body">
                    <StarRating gradeIndex={this.props.rating} setGradeIndex={() => {}} />
                    {this.props.review}
                </div>
                <div className="card-footer">
                </div>
            </div>
        );
   }
}