import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false
        };
    }
            componentDidMount() {
        this.setState({ isLoading: true });
            }
    render() {
        return (
            <div>
                <h2>This is home page!</h2>
            </div>
        )
    }
}

export default Dashboard;