import React from 'react';
import ConfirmBackOutOfQuiz from './ConfirmBackOutOfQuiz';
import questionImage from '../images/question-img.png';
import PropTypes from "prop-types";
import {submitQuestionAnswer, getNextQuestion, finishQuiz, resetApp} from "../store/actions";
import connect from "react-redux/es/connect/connect";
import ButtonWrapper from "./ButtonWrapper";

const  resetState = {
    showConfirmationDialog: false,
    answer: null,
    answerColor: null,
    quizId: null
};

class QuestionsAndAnswers extends React.Component {
    state = {
        showConfirmationDialog: false,
        answer: null,
        answerColor: null,
        quizId: null
    };

    componentDidUpdate = (prevProps) => {
        if(prevProps.questionIndex !== this.props.questionIndex) {
            this.setState({
                ...resetState
            });
        }
    };

    showConfirmationDialog = () => {
        this.setState({
            showConfirmationDialog: true,
        });
    };

    hideConfirmationDialog = () => {
        this.setState({
            showConfirmationDialog: false,
        });
    };

    confirmConfirmationDialog = () => {
        this.props.resetApp();
    };

    handleSelectAnswer = (answer, answerColor) => {
        this.setState({
            answerColor: answerColor,
            answer
        });

        this.props.submitQuestionAnswer({
            questionId: this.props.question.Id,
            answer
        });
    };

    handleNextArrowClick = () => {
        if (this.props.questionIndex === this.props.numberOfQuestions - 1) {
            this.props.finishQuiz();
            return;
        }

        this.props.getNextQuestion();
    };

    render() {
        const {question, questionIndex, numberOfQuestions} = this.props;
        const {answer} = this.state;

        if (!question) { return null; }
        const progressStyle = {
            width: `${ (questionIndex + 1) * 100/numberOfQuestions }%`,
        };
        const cardHolderClassName = `card-holder ${this.state.answerColor ? `selected-${this.state.answerColor}` : ''}`;

        const answers = {};
        question.QuestionAnswers.forEach((possibleAnswer) => {
            answers[possibleAnswer.QuestionAnswerType.IconColour.toLowerCase()] = possibleAnswer;
        });

        const redClassName = `red-bin-wrapper droptarget ${answer ? 'disabled' : ''}`;
        const otherClassName = `other-bin-wrapper droptarget ${answer ? 'disabled' : ''}`;
        const yellowClassName = `yellow-bin-wrapper droptarget ${answer ? 'disabled' : ''}`;

        return (
            <div className="content-wrapper">
                <div className="quiz-card-container">
                    <div className="quiz-card-header">
                        <div className="back-btn-wrapper">
                            <ButtonWrapper
                                onClick={this.showConfirmationDialog}
                                className="btn blue-button"
                                data-toggle="modal"
                                data-target="#backButtonModal"
                            >
                                Back
                            </ButtonWrapper>
                        </div>
                        <div className="progress-bar-wrapper">
                            <div className="progress-bar" style={progressStyle}>{questionIndex + 1} of {numberOfQuestions}</div>
                        </div>
                        <div className="logo-small-wrapper" />
                    </div>
                    <div className={cardHolderClassName}>
                        {!answer ? (
                        <div className="card-wrapper"
                             id="dragtarget"
                             // draggable="true"
                             // onDragStart="dragStart(event)"
                             // onDrag="dragging(event)"
                        >
                            <div className="card-question">{question.QuestionText}</div>
                            <div className="card-img">
                                <img className="img-fluid" src={questionImage} alt="" />
                            </div>
                        </div>
                        ) : null }

                        {answer ? (
                        <div className="card-wrapper" id={answer.IsCorrectAnswer ? 'correct' : 'incorrect'}>
                            <div className={`answer-header ${answer.IsCorrectAnswer ? 'correct' : 'incorrect'}`}>
                                {answer.IsCorrectAnswer ? 'Correct' : 'Incorrect'}
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
                                <div className="answer-info-text">{answer.AnswerResponseText}</div>
                            </div>
                        </div>
                        ) : null }
                    </div>
                    <div className="bins-wrapper">
                        {answers.red ? (
                        <div
                            className={redClassName}
                            id="redBin"
                            onClick={() => { this.handleSelectAnswer(answers.red, 'red', );}}
                            // onDragEnter={this.onDragEnter}
                            // onDragLeave={this.onDragLeave}
                            // onDrop={this.onDrop}
                            // onDragOver={this.onDragOver}
                        >
                            <div className="bin-name">General waste</div>
                        </div>
                        ) : null}
                        {answers.green ? (
                        <div
                            className={otherClassName}
                            id="otherBin"
                            onClick={() => { this.handleSelectAnswer(answers.green, 'other');}}
                            // onDragEnter={this.onDragEnter}
                            // onDragLeave={this.onDragLeave}
                            // onDrop={this.onDrop}
                            // onDragOver={this.onDragOver}
                        >
                            <div className="bin-name">Other</div>
                        </div>
                        ) : null}
                        {answers.yellow && !answer ? (
                            <div
                                className={yellowClassName}
                                id="yellowBin"
                                onClick={() => { this.handleSelectAnswer(answers.yellow, 'yellow');}}
                                // onDragEnter={this.onDragEnter}
                                // onDragLeave={this.onDragLeave}
                                // onDrop={this.onDrop}
                                // onDragOver={this.onDragOver}
                            >
                                <div className="bin-name">Recycling</div>
                            </div>
                        ) : null}

                        {answer ? (
                            <div className="next-arrow-wrapper">
                                <div className="next-arrow-holder">
                                    <ButtonWrapper className="next-arrow" onClick={this.handleNextArrowClick} />
                                </div>
                                <div className="next-arrow-name">Next</div>
                            </div>
                        ) : null}
                    </div>
                </div>

                {this.state.showConfirmationDialog
                    ? <ConfirmBackOutOfQuiz
                        onCancelHandler={this.hideConfirmationDialog}
                        onConfirmHandler={this.confirmConfirmationDialog}
                    />
                    : null
                }
            </div>
        )
    }
}

QuestionsAndAnswers.propTypes = {
    submitQuestionAnswer: PropTypes.func.isRequired,
    getNextQuestion: PropTypes.func.isRequired,
    finishQuiz: PropTypes.func.isRequired,
    resetApp: PropTypes.func.isRequired,
    question: PropTypes.object,
    numberOfQuestions: PropTypes.number,
    questionIndex: PropTypes.number,
};

const mapStateToProps = (state) => {
    return {
        question: state.questions ? state.questions[state.currentQuestionIndex] : null,
        questionIndex: state.questions ? state.currentQuestionIndex : null,
        numberOfQuestions: state.questions ? state.questions.length : null,
        quizId: state.quizId ? state.quizId : null
    }
};

const mapDispatchToProps = {
    resetApp,
    submitQuestionAnswer,
    getNextQuestion,
    finishQuiz,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionsAndAnswers)

// export default QuestionsAndAnswers
