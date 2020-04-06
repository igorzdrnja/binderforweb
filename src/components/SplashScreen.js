import React from 'react'
import binderLogo from "../images/binder-logo.png";
import blackTownLogo from '../images/blacktown-logo.png';

class SplashScreen extends React.Component {
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

export default SplashScreen;
