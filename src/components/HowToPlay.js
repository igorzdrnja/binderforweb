import React, {Component} from 'react';
import redBin from '../images/red-bin.png';
import otherBin from '../images/other-bin.png';
import yellowBin from '../images/yellow-bin.png';
import ButtonWrapper from "./ButtonWrapper";
import PropTypes from "prop-types";
import {startQuiz, resetApp} from "../store/actions";
import connect from "react-redux/es/connect/connect";

class HowToPlay extends Component {
    startQuiz = () => {
        this.props.startQuiz()
    };

    render() {
        return (
            <div className="content-wrapper">
                <div className="how-to-play-container">
                    <div className="how-to-play-header">
                        <div className="header-title">
                            <h1>How to play</h1>
                        </div>
                    </div>
                    <div className="instructions-wrapper">
                        <div className="red-bin-instruction-wrapper">
                            <div className="bin-img-wrapper">
                                <img className="img-fluid" src={redBin} alt="" />
                            </div>
                            <div className="instructions-text">Swipe left or tap the red bin for general waste.</div>
                        </div>
                        <div className="other-bin-instruction-wrapper">
                            <div className="bin-img-wrapper">
                                <img className="img-fluid" src={otherBin} alt="" />
                            </div>
                            <div className="instructions-text">Swipe down or tap the map marker for other options.</div>
                        </div>
                        <div className="yellow-bin-instruction-wrapper">
                            <div className="bin-img-wrapper">
                                <img className="img-fluid" src={yellowBin} alt="" />
                            </div>
                            <div className="instructions-text">Swipe right or tap the yellow bin for recycling.</div>
                        </div>
                    </div>
                    <div className="footer-buttons-wrapper">
                        <div className="left-btn-wrapper">
                            <ButtonWrapper onClick={this.props.resetApp} className="btn transparent-button">
                                Back
                            </ButtonWrapper>
                        </div>
                        <div className="right-btn-wrapper">
                            <ButtonWrapper className="btn white-button" onClick={this.startQuiz}>
                                Start
                            </ButtonWrapper>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

HowToPlay.propTypes = {
    startQuiz: PropTypes.func.isRequired,
    resetApp: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    startQuiz,
    resetApp,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HowToPlay)
