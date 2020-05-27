import React from 'react'
import PropTypes from "prop-types";
import {submitCommunityData} from "../store/actions";
import {connect} from "react-redux";

class CommunityForm extends React.Component {
    state = {
        checked: {
            '1': false,
            '2': false,
            '3': false,
            '4': false,
        },
        email: '',
        error: ''
    };

    onChangeHandler = event => {
        this.setState({'error': ''});
        if (event.target.type === 'checkbox') {
            let checked = Object.assign({}, this.state.checked)
            checked[event.target.name] = event.target.checked;
            this.setState({
                checked: checked
            })
        } else {
            const newState = {};
            newState[event.target.name] = event.target.value;
            this.setState({...newState});
        }
    };

    submitForm = (event) => {
        event.preventDefault();
        const ch = this.state.checked;
        const someAreChecked =  Object.keys(ch).some(k => ch[k]);

        if (!someAreChecked) {
            this.setState({'error': 'Please select at least one option'})
            return;
        }

        Object.keys(ch).forEach((categoryId, value) => {
            const isChecked = ch[categoryId];

            if(isChecked) {
                this.props.submitCommunityData({
                    email: this.state.email,
                    categoryId,
                });
            }
        })
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
                            <input id="check1" type="checkbox" name="1" onChange={this.onChangeHandler} />
                            <label htmlFor="check1">Rewards for recycling</label>
                        </div>
                        <div className="form-group">
                            <input id="check2" type="checkbox" name="2" onChange={this.onChangeHandler} />
                            <label htmlFor="check2">B informed app</label>
                        </div>
                        <div className="form-group">
                            <input id="check3" type="checkbox" name="3" onChange={this.onChangeHandler} />
                            <label htmlFor="check3">Sustainable living</label>
                        </div>
                        <div className="form-group">
                            <input id="check4" type="checkbox" name="4" onChange={this.onChangeHandler} />
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
                                <div className="form-text" style={{color: 'red'}}>{ this.state.error }</div>
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
    error: PropTypes.string,
    email: PropTypes.string,
    checked: PropTypes.array
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
