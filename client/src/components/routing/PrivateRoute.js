import React, { Component } from 'react'
import { useEffect } from 'react'
import { Route, Routes, useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


const PrivateRoute = props => {
    const navigate = useNavigate();
    useEffect(()=>{ if (!props.auth.isAuthenticated && !props.auth.loading) {
        return navigate('/login');
    } else {
        <Routes>
        <Route exact path={props.path} component={props.component} />
        </Routes>
    }
})
}

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute)