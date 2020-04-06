import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setProfile, fetchQuestions, initApp} from '../store/actions';
import binderLogo from "../images/binder-logo.png";
import blackTownLogo from '../images/blacktown-logo.png';

class SplashScreen extends React.Component {
    componentDidMount() {
        this.props.initApp("SOMETHING");
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="splash-screen-container">
                    <div className="splash-screen-wrapper">
                        <img src={binderLogo} alt=""/>
                    </div>
                    <div className="splash-screen-footer">
                        <div className="splash-screen-footer-text">A recycling quiz app by</div>
                        <div className="footer-logo-wrapper">
                            <img src={blackTownLogo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SplashScreen.propTypes = {
    profile: PropTypes.string,
    setProfile: PropTypes.func.isRequired,
    fetchQuestions: PropTypes.func.isRequired,
    initApp: PropTypes.func.isRequired,
};

SplashScreen.defaultProps = {
    profile: null,
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

const mapDispatchToProps = {
    setProfile,
    fetchQuestions,
    initApp,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SplashScreen)
