import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class AuthenticatedRoute extends Component {
    render () {
        return (
            <Route { ...this.props} />
        )
    }
}

export default AuthenticatedRoute;