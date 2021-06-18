import React from 'react';
import StarRating from './star-rating';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header bg-success text-white result">
                    <h2>{this.props.index + 1}: {this.props.name}</h2>
                    <br></br>
                    <img src={this.props.image} alt="this.props.name" height="100px"/>
                </div>
                <div className="card-body">
                    <h3>Synopsis</h3>
                    {this.props.synopsis}
                    <br></br>
                    <h3 className="result">What the critics say</h3>
                    <StarRating gradeIndex={this.props.rating} />
                </div>
                <div className="card-footer">
                    <p>Reviews here</p>
                </div>
            </div>
        );
   }
}