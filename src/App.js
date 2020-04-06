import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {initApp} from './store/actions';
import Router from './routing/router';

class App extends React.Component {
    componentDidMount() {
        this.props.initApp("SOMETHING");
    }

    render() {
        return (
            <Router />
        )
    }
}

App.propTypes = {
    initApp: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    initApp,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
