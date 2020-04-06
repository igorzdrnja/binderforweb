import React from 'react'
import PropTypes from 'prop-types';

class ButtonWrapper extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                {this.props.children}
            </button>
        )
    }
}

ButtonWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.element,
        PropTypes.object,
    ]),
    onClick: PropTypes.func,
};

ButtonWrapper.defaultProps = {
    onClick: () => {},
};

export default ButtonWrapper;
