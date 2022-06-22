import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }

    }

    componentDidCatch(error, info) {
        console.log("error", error);
        console.log("Info", info);
    }

    render() {
        if (this.state.hasError) {
            return <p className='text-danger'>Something went wrong ,our Engineer are right on top of it <Link to={"/insurancetype"} className='fw-bold text-primary'>Click here </Link>to go back</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary