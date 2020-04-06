import React from 'react'

class FinalScore extends React.Component {
    render() {
        const profileType = 'STUDENT';
        // const profileType = 'COMUNITY';
        switch (profileType) {
            case 'COMUNITY': {
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
                                        <div className="result-info"><span className="bigger">80%</span> correct</div>
                                        <p>You got 16 out of 20 questions right.</p>
                                    </div>
                                </div>
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
                            </div>
                            <div className="footer-buttons-wrapper">
                                <div className="left-btn-wrapper">
                                    <a href="#" className="btn transparent-button">Done</a>
                                </div>
                                <div className="right-btn-wrapper">
                                    <a href="#" className="btn white-button">Skip</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            case 'STUDENT':
            default: {
                return (
                    <div className="content-wrapper bckg-green">
                        <div className="results-students-container">
                            <div className="results-students-header">
                                <div className="header-title">
                                    <h1>Your score</h1>
                                </div>
                            </div>
                            <div className="score-info-wrapper">
                                <div className="score-wrapper">
                                    <div className="score-img-wrapper" />
                                    <div className="result-wrapper">
                                        <div className="result-info"><span className="bigger">80%</span> correct</div>
                                        <p>You got 16 out of 20 questions right.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-buttons-wrapper">
                                <div className="right-btn-wrapper">
                                    <a href="#" className="btn white-button">Done</a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        }
    }
}

export default FinalScore
