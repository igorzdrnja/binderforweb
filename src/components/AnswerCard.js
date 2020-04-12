import React from 'react';
import PropTypes from "prop-types";

const AnswerCard = ({isCorrectAnswer, questionImage, answerResponseText}) => {
    return (
        <div className="card-wrapper" id={isCorrectAnswer ? 'correct' : 'incorrect'}>
            <div className={`answer-header ${isCorrectAnswer ? 'correct' : 'incorrect'}`}>
                {isCorrectAnswer ? 'Correct' : 'Incorrect'}
            </div>
            <div className="answer-info-wrapper">
                <div className="answer-info-img">
                    <div className="bin-img-holder">
                        <img className="img-fluid" src={questionImage} alt="" />
                    </div>
                    <div className="equal-sign-wrapper" />
                    <div className="bin-img-holder">
                        <div className="red-bin-answer" />
                    </div>
                </div>
                <div className="answer-info-text">{answerResponseText}</div>
            </div>
        </div>
    );
};

AnswerCard.propTypes = {
    isCorrectAnswer: PropTypes.bool,
    questionImage: PropTypes.string,
    answerResponseText: PropTypes.string,
};

export default AnswerCard;
