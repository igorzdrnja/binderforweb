import React from 'react';
import PropTypes from 'prop-types';
import ButtonWrapper from "./ButtonWrapper";

class ConfirmBackOutOfQuiz extends React.Component {
    render() {
        return (
            <div className="modal" id="backButtonModal" tabIndex="-1" role="dialog" style={{display: "block"}}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title">Are you sure?</h2>
                        </div>
                        <div className="modal-body">
                            <p>Going back will reset your progress.</p>
                        </div>
                        <div className="modal-footer">
                            <ButtonWrapper onClick={this.props.onConfirmHandler} className="btn white-button">
                                Start over
                            </ButtonWrapper>
                            <ButtonWrapper className="btn blue-button" onClick={this.props.onCancelHandler}>
                                Cancel
                            </ButtonWrapper>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ConfirmBackOutOfQuiz.propTypes = {
    onCancelHandler: PropTypes.func,
    onConfirmHandler: PropTypes.func,
};

export default ConfirmBackOutOfQuiz;
