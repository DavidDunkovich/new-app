import React, { Component } from 'react';
import './App.css';

class SplashScreen extends Component {

    state = {
        slide: 1
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                slide: 2
            })
        }, 2500)
    }
        
    render() {
        return (
        <div className='splash-screen'>
            {this.state.slide===1 && <p className="splash-screen-text fade-in-out white">Welcome</p>}
            {this.state.slide===2 && <p className="splash-screen-text fade-in-up white">IKE</p>}         
        </div>
    );
  }
}

export default SplashScreen;
