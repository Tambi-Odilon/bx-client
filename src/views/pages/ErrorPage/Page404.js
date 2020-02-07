import React from "react";

class Page404 extends React.Component {
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
        return(
            <div>
                This is an Error 404 Page !!
            </div>
        )
    }
}

export default Page404;