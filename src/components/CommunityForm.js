import React from 'react'
import PropTypes from "prop-types";
import {submitCommunityData} from "../store/actions";
import {connect} from "react-redux";

class CommunityForm extends React.Component {
    state = {
        rewards: false,
        app: false,
        living: false,
        news: false,
        email: '',
    };

    onChangeHandler = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [event.target.name]: value,
        })
    };

    submitForm = (event) => {
        event.preventDefault();

        this.props.submitCommunityData({
            ...this.state,
        });
    };

    render() {
        return (
            <div className="form-container">
                <div className="form-wrapper">
                    <div className="form-title">
                        <h2>Want to know more?</h2>
                    </div>
                    <div className="form-text">Enter your email for more Blacktown City waste
                        information.
                    </div>
                    <form onSubmit={this.submitForm}>
                        <div className="form-group">
                            <input id="check1" type="checkbox" name="rewards" onChange={this.onChangeHandler} />
                            <label htmlFor="check1">Rewards for recycling</label>
                        </div>
                        <div className="form-group">
                            <input id="check2" type="checkbox" name="app" onChange={this.onChangeHandler} />
                            <label htmlFor="check2">B informed app</label>
                        </div>
                        <div className="form-group">
                            <input id="check3" type="checkbox" name="living" onChange={this.onChangeHandler} />
                            <label htmlFor="check3">Sustainable living</label>
                        </div>
                        <div className="form-group">
                            <input id="check4" type="checkbox" name="news" onChange={this.onChangeHandler} />
                            <label htmlFor="check4">Blacktown City news</label>
                        </div>
                        <div className="email-submit-wrapper">
                            <div className="email-wrapper">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    onChange={this.onChangeHandler}
                                    required={true}
                                />
                            </div>
                            <div className="submit-wrapper">
                                <input type="submit" className="btn blue-button" value="Submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

CommunityForm.propTypes = {
    submitCommunityData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        correctAnswers: state.correctAnswers,
        numberOfQuestions: state.questions ? state.questions.length : null,
        profileType: state.profile,
    }
};

const mapDispatchToProps = {
    submitCommunityData,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommunityForm)
