import React from 'react'
import PropTypes from 'prop-types';

class ButtonWrapper extends React.Component {
    render() {
        return (
            <button className={this.props.className} onClick={this.props.onClick}>
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
    className: PropTypes.string,
    onClick: PropTypes.func,
};

ButtonWrapper.defaultProps = {
    className: '',
    onClick: () => {},
};

export default ButtonWrapper;
