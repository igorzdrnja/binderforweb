import React from 'react'
import questionImage from '../images/question-img.png';

class QuestionsAndAnswers extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="quiz-card-container">
                    <div className="quiz-card-header">
                        <div className="back-btn-wrapper">
                            <a href="#" className="btn blue-button" data-toggle="modal"
                               data-target="#backButtonModal">Back</a>
                        </div>
                        <div className="progress-bar-wrapper">
                            <div className="progress-bar">9 of 20</div>
                        </div>
                        <div className="logo-small-wrapper" />
                    </div>
                    <div className="card-holder">
                        <div className="card-wrapper" id="dragtarget" draggable="true" onDragStart="dragStart(event)"
                             onDrag="dragging(event)">
                            <div className="card-question">How do you dispose of <br /><span className="bigger">polystyrene foam?</span>
                            </div>
                            <div className="card-img">
                                <img className="img-fluid" src={questionImage} alt="" />
                            </div>
                        </div>

                        <div className="card-wrapper" id="incorrect">
                            <div className="answer-header incorrect">Incorrect</div>
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
                                <div className="answer-info-text">Incorrect. Polystyrene goes in your garbage bin.</div>
                            </div>
                        </div>

                        <div className="card-wrapper" id="correct">
                            <div className="answer-header correct">Correct</div>
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
                                <div className="answer-info-text">Correct! Polystyrene goes in your garbage bin.</div>
                            </div>
                        </div>
                    </div>
                    <div className="bins-wrapper">
                        <div className="red-bin-wrapper droptarget" id="redBin" onDragEnter="dragEnter(event)"
                             onDragLeave="dragLeave(event)" onDrop="drop(event)" onDragOver="allowDrop(event)">
                            <div className="bin-name">General waste</div>
                        </div>
                        <div className="other-bin-wrapper droptarget" id="otherBin" onDragEnter="dragEnter(event)"
                             onDragLeave="dragLeave(event)" onDrop="drop(event)" onDragOver="allowDrop(event)">
                            <div className="bin-name">Other</div>
                        </div>
                        <div className="yellow-bin-wrapper droptarget" id="yellowBin" onDragEnter="dragEnter(event)"
                             onDragLeave="dragLeave(event)" onDrop="drop(event)" onDragOver="allowDrop(event)">
                            <div className="bin-name">Recycling</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionsAndAnswers
