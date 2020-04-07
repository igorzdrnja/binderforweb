import React from 'react'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {PROFILE_TYPES} from '../enums';
import ButtonWrapper from "./ButtonWrapper";
import {setProfile} from "../store/actions";
import binderLogo from '../images/binder-logo-blue.png';

class SelectProfileType extends React.Component {
    render() {
        return (
            <div className="content-wrapper bckg-grey">
                <div className="select-profile-container">
                    <div className="select-profile-header">
                        <div className="header-title">
                            <h1>Select profile</h1>
                        </div>
                        <div className="header-logo">
                            <img className="img-fluid" src={binderLogo} alt="" />
                        </div>
                    </div>
                    <div className="select-profile-wrapper">
                        <div className="student-profile-wrapper">
                            <div className="play-option">
                                <h2>Student</h2>
                                <ButtonWrapper onClick={()=> {this.props.setProfile(PROFILE_TYPES.STUDENT);}}>
                                    <span>Play</span>
                                </ButtonWrapper>
                            </div>
                        </div>
                        <div className="community-profile-wrapper">
                            <div className="play-option">
                                <h2>Community</h2>
                                <ButtonWrapper onClick={()=> {this.props.setProfile(PROFILE_TYPES.COMMUNITY);}}>
                                    <span>Play</span>
                                </ButtonWrapper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SelectProfileType.propTypes = {
    setProfile: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    setProfile,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectProfileType)
