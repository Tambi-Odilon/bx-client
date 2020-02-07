import React, { Component } from "react";
import Clock from 'react-live-clock';
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false
        };
            }
            componentDidMount() {
        this.setState({ isLoading: true });
            }
    render(){
        return (
            <div>
                <h3>This is a Login Page</h3>
                <strong>
                    <Clock format={'HH:mm:ss'} ticking={true}  />  {/* timezone={'US/Pacific'} */}
                </strong>
                <strong>
                    <Clock format={'MM-DD-YYYY'} ticking={true}  />  {/* timezone={'US/Pacific'} */}
                </strong>
            </div>
        )
    }
    
}
export default Login;
