import React from 'react'
import binderLogo from '../images/binder-logo-blue.png';

class SelectProfileType extends React.Component {
    startQuiz(type) {

    }

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
                                <a href="#">Play</a>
                            </div>
                        </div>
                        <div className="community-profile-wrapper">
                            <div className="play-option">
                                <h2>Community</h2>
                                <a href="#">Play</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectProfileType
