import React from 'react';
import PropTypes from "prop-types";

const AnswerCard = ({isCorrectAnswer, questionImage, answerResponseText, answerColor}) => {
    let answerBin = null;

    switch (answerColor) {
        case 'yellow': {
            answerBin = (<div className="yellow-bin-answer" />);
            break;
        }
        case 'other': {
            answerBin = (<div className="other-bin-answer" />);
            break;
        }
        default:
        case 'red': {
            answerBin = (<div className="red-bin-answer" />);
            break;
        }
    }

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
                        {answerBin}
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
    answerColor: PropTypes.string,
};

export default AnswerCard;
