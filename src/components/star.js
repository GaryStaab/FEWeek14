import React from 'react';

// Need to credit Yosra Skhiri - use her work as a template
// https://dev.to/yosraskhiri/rating-stars-in-react-js-4dfg

export default class Star extends React.Component {
    constructor(props) {
        super(props);
        this.changeGrade = this.changeGrade.bind(this);
    }

    changeGrade = (e) => {
        this.props.changeGradeIndex(e.target.value);
    }

    render() {
        return (
            <label className="star">
                <input
                    type="radio"
                    name="rating"
                    id={this.props.grade}
                    value={this.props.index}
                    className="stars_radio-input"
                    onClick={this.changeGrade}
                />
                <svg 
                    width="25" 
                    height="25" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#393939" 
                    strokeWidth="1" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    style={this.props.style}
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            </label>
        );
    }
}