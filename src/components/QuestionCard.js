import React from 'react';
import PropTypes from "prop-types";

const QuestionCard = ({questionText, questionImage}) => {

    return (
        <div className="card-wrapper">
            <div className="card-question">{questionText}</div>
            <div className="card-img">
                <img className="img-fluid" src={questionImage} alt="" />
            </div>
        </div>
    );
};

QuestionCard.propTypes = {
    questionText: PropTypes.string,
    questionImage: PropTypes.string,
};

export default QuestionCard;
