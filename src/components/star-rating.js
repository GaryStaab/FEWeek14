import React from 'react';
import Star from './star';

export default class StarRating extends React.Component {
    

    constructor(props) {
        super(props);
        this.GRADES = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];
        this.changeGradeIndex = this.changeGradeIndex.bind(this);
    }

    
    activeStar = {
        fill: 'yellow'
    };

    changeGradeIndex = ( index ) => {
        this.props.setGradeIndex(index);
    }

    render(){
        return (
            <div className="container">
                <h5 className="result">{ this.GRADES[this.props.gradeIndex] ? this.GRADES[this.props.gradeIndex] : 'You didn\'t review yet'}</h5>
                <div className="stars">
                    {
                        this.GRADES.map((grade, index) => (
                            <Star 
                                index={index} 
                                key={grade} 
                                changeGradeIndex={this.changeGradeIndex}
                                style={ this.props.gradeIndex >= index ? this.activeStar : {}}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}