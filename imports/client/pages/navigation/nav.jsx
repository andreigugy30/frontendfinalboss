import React, {Component} from 'react';
import './nav.scss';


class Navigation extends Component {
    render() {
        
        return (
            <nav>
                <a href="#" className="logo">
                    <p>donut <span>TM</span></p> 
                </a>
                <a href="#" className="notification-icon">
                    <img src="/nav-alarm.png" alt="Notification icon"/>
                </a>
            </nav>
        )
    }
}


export default Navigation;
