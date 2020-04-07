import React from 'react'
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
// import {finishQuiz, getNextQuestion, submitAnswer} from "../store/actions";
import {connect} from "react-redux";
import {PROFILE_TYPES} from '../enums';
import routes from '../routing/routes';

class FinalScore extends React.Component {
    render() {
        const {numberOfQuestions, correctAnswers, profileType} = this.props;

        if(!numberOfQuestions) return null;
        const  percent = correctAnswers * 100 / numberOfQuestions;

        return (
            <div className="content-wrapper bckg-green">
                <div className="results-community-container">
                    <div className="results-community-header">
                        <div className="header-title">
                            <h1>Your score</h1>
                        </div>
                    </div>
                    <div className="score-info-wrapper">
                        <div className="score-wrapper">
                            <div className="score-img-wrapper" />
                            <div className="result-wrapper">
                                <div className="result-info"><span className="bigger">{percent.toFixed(2)}%</span> correct</div>
                                <p>You got {correctAnswers} out of {numberOfQuestions} questions right.</p>
                            </div>
                        </div>
                        {profileType === PROFILE_TYPES.COMMUNITY ? (
                        <div className="form-container">
                            <div className="form-wrapper">
                                <div className="form-title">
                                    <h2>Want to know more?</h2>
                                </div>
                                <div className="form-text">Enter your email for more Blacktown City waste
                                    information.
                                </div>
                                <form>
                                    <div className="form-group">
                                        <input id="check1" type="checkbox" name="rewards" value="rewards"/>
                                        <label htmlFor="check1">Rewards for recycling</label>
                                    </div>
                                    <div className="form-group">
                                        <input id="check2" type="checkbox" name="app" value="app" />
                                        <label htmlFor="check2">New community app</label>
                                    </div>
                                    <div className="form-group">
                                        <input id="check3" type="checkbox" name="living" value="living" />
                                        <label htmlFor="check3">Sustainable living</label>
                                    </div>
                                    <div className="form-group">
                                        <input id="check4" type="checkbox" name="news" value="news" />
                                        <label htmlFor="check4">Blacktown City news</label>
                                    </div>
                                    <div className="email-submit-wrapper">
                                        <div className="email-wrapper">
                                            <input type="email" placeholder="your@email.com" />
                                        </div>
                                        <div className="submit-wrapper">
                                            <input type="submit" className="btn blue-button" value="Submit" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        ) : null}
                    </div>
                    <div className="footer-buttons-wrapper">
                        <div className="left-btn-wrapper">
                            <Link to={routes.HOW_TO_PLAY} className="btn transparent-button">Done</Link>
                        </div>
                        {profileType === PROFILE_TYPES.COMMUNITY ? (
                        <div className="right-btn-wrapper">
                            <Link to={routes.HOW_TO_PLAY} className="btn white-button">Skip</Link>
                        </div>
                        ) : null}
                    </div>
                </div>
            </div>
        )
    }
}

FinalScore.propTypes = {
    numberOfQuestions: PropTypes.number,
    correctAnswers: PropTypes.number,
};

const mapStateToProps = (state) => {
    return {
        correctAnswers: state.correctAnswers,
        numberOfQuestions: state.questions ? state.questions.length : null,
        profileType: state.profile,
    }
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FinalScore)

// export default FinalScore
