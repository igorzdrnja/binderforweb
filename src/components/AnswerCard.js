import React from 'react';
import PropTypes from "prop-types";

const AnswerCard = ({isCorrectAnswer, questionImage, answerResponseText, answerColor, possibleAnswers}) => {
    let answerBin = (<div className={`${answerColor}-bin-answer`} />);

    if(!isCorrectAnswer) {
        possibleAnswers.forEach((answer, index) => {
            const answerBinColor = answer.QuestionAnswerType.IconColour.toLowerCase();
            const answerBinClassName = `${answerBinColor === 'green' ? 'other' : answerBinColor}-bin-answer`;
            if(answer.IsCorrectAnswer) {
                answerBin = (<div className={answerBinClassName} />);
            }
        });
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
    possibleAnswers: PropTypes.array,
};

export default AnswerCard;
