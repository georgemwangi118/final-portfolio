import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './GoHome.css';

import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';

// This component uses programmatic navigation
// I could have used Link
// But, I've used the history object, to represent its usage

class GoHome extends Component {
    navigateToHome = () => {
        const { history } = this.props;
        history.push('/');
    };

    render() {
        const { location } = this.props;
        const whiteBtn = location.pathname === '/';

        return (
            <button
                className={`go-home-btn ${
                    whiteBtn ? 'white-bkg' : 'gradient-bkg'
                }`}
                onClick={this.navigateToHome}
            >
                <img 
                    className='home-icon'
                    src={whiteBtn ? homeIconBlack : homeIconWhite} 
                    alt="home-icon" />
            </button>
        );
    }
}

export default withRouter(GoHome);