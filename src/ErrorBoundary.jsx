import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    state = {hasError: false}
    static getDerivedStateFromError() {
        return {hasError: true}
    }
    componentDidCatch(error,info){
        console.log("ErrorBoundaryComponent catched error", error, info)
    }
    render() {
        if(this.state.hasError){
            return (
                <h2>
                    There was and error with the search. <Link to="/">Click here to go back to the homepage</Link>
                    </h2>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;