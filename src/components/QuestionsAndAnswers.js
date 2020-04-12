import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { DndProvider } from 'react-dnd'
import TouchBackend from 'react-dnd-touch-backend'
// import htmlBackend from 'react-dnd-html5-backend'
import {submitAnswer, getNextQuestion, finishQuiz, resetApp} from "../store/actions";
import ConfirmBackOutOfQuiz from './ConfirmBackOutOfQuiz';
import DraggableQuestionWrapper from './DraggableQuestionWrapper';
import DropableAnswerWrapper from './DropableAnswerWrapper';
import QuestionCard from './QuestionCard';
import AnswerCard from "./AnswerCard";
import questionImage from '../images/question-img.png';
import ButtonWrapper from "./ButtonWrapper";

const  resetState = {
    showConfirmationDialog: false,
    answer: null,
    answerColor: null,
};

class QuestionsAndAnswers extends React.Component {
    state = {
        showConfirmationDialog: false,
        answer: null,
        answerColor: null,
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
            answer,
        });

        this.props.submitAnswer({
            questionId: this.props.question.Id,
            answer,
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
        // Id: 21
        // AnswerResponseText: "Correct! Baby food squeeze packs go in your garbage bin."
        // QuestionAnswerType: {Id: 1, DisposalTypeName: "Garbage bin", IconColour: "Red"}
        // IsCorrectAnswer: true

        const redClassName = `red-bin-wrapper droptarget ${answer ? 'disabled' : ''}`;
        const otherClassName = `other-bin-wrapper droptarget ${answer ? 'disabled' : ''}`;
        const yellowClassName = `yellow-bin-wrapper droptarget ${answer ? 'disabled' : ''}`;
        const dndOptions = {};

        return (
            <DndProvider backend={TouchBackend} options={dndOptions}>
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
                            <DraggableQuestionWrapper>
                                <QuestionCard
                                    isAnswered={!!answer}
                                    questionImage={questionImage}
                                    questionText={question.QuestionText}
                                />
                            </DraggableQuestionWrapper>
                        ) : null }

                        {answer ? (
                            <AnswerCard
                                questionImage={questionImage}
                                answerResponseText={answer.AnswerResponseText}
                                isCorrectAnswer={answer.IsCorrectAnswer}
                            />
                        ) : null }
                    </div>
                    <div className="bins-wrapper">
                        {answers.red ? (
                            <DropableAnswerWrapper
                                className={redClassName}
                                onDrop={() => { this.handleSelectAnswer(answers.red, 'red');}}
                                onClick={() => { this.handleSelectAnswer(answers.red, 'red');}}
                            >
                                <div
                                    id="redBin"
                                    onClick={() => { this.handleSelectAnswer(answers.red, 'red');}}
                                >
                                    <div className="bin-name">General waste</div>
                                </div>
                            </DropableAnswerWrapper>
                        ) : null}
                        {answers.green ? (
                            <DropableAnswerWrapper
                                className={otherClassName}
                                onDrop={() => { this.handleSelectAnswer(answers.green, 'other');}}
                                onClick={() => { this.handleSelectAnswer(answers.green, 'other');}}
                            >
                                <div
                                    id="otherBin"
                                    onClick={() => { this.handleSelectAnswer(answers.green, 'other');}}
                                >
                                    <div className="bin-name">Other</div>
                                </div>
                            </DropableAnswerWrapper>
                        ) : null}
                        {answers.yellow && !answer ? (
                            <DropableAnswerWrapper
                                className={yellowClassName}
                                onDrop={() => { this.handleSelectAnswer(answers.yellow, 'yellow');}}
                                onClick={() => { this.handleSelectAnswer(answers.yellow, 'yellow');}}
                            >
                                <div
                                    id="yellowBin"
                                    onClick={() => { this.handleSelectAnswer(answers.yellow, 'yellow');}}
                                >
                                    <div className="bin-name">Recycling</div>
                                </div>
                            </DropableAnswerWrapper>
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
            </DndProvider>
        )
    }
}

QuestionsAndAnswers.propTypes = {
    submitAnswer: PropTypes.func.isRequired,
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
    }
};

const mapDispatchToProps = {
    resetApp,
    submitAnswer,
    getNextQuestion,
    finishQuiz,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionsAndAnswers)

// export default QuestionsAndAnswers
