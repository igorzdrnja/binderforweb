import React from 'react'
import PropTypes from "prop-types";
import {resetApp} from "../store/actions";
import {connect} from "react-redux";
import {PROFILE_TYPES} from '../enums';
import CommunityForm from "./CommunityForm";
import ButtonWrapper from "./ButtonWrapper";

class FinalScore extends React.Component {
    render() {
        const {numberOfQuestions, correctAnswers, profileType, resetApp, communityFormData} = this.props;

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
                                <div className="result-info"><span className="bigger">{percent.toFixed()}%</span> correct</div>
                                <p>You got {correctAnswers} out of {numberOfQuestions} questions right.</p>
                            </div>
                        </div>
                        {!communityFormData ? (<CommunityForm/>) : null}
                    </div>
                    <div className="footer-buttons-wrapper">
                        <div className="left-btn-wrapper">
                            <ButtonWrapper onClick={resetApp} className="btn transparent-button">Done</ButtonWrapper>
                        </div>
                        {profileType === PROFILE_TYPES.COMMUNITY ? (
                        <div className="right-btn-wrapper">
                            <ButtonWrapper onClick={resetApp} className="btn white-button">Skip</ButtonWrapper>
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
        profileType: state.profileType,
        communityFormData: state.communityFormData,
    }
};

const mapDispatchToProps = {
    resetApp,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FinalScore)

// export default FinalScore
