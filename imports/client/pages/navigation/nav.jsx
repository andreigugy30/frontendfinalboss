import React, {Component} from 'react';
import './nav.scss';


class Navigation extends Component {
    render() {
        
        return (
            <nav>
                <div className="container">
                    <a href="#" className="logo">
                        <p>donut <span>TM</span></p> 
                    </a>
                    <a href="#" className="notification-icon">
                        <img src="/images/nav-alarm.png" alt="Notification icon"/>
                    </a>
                </div>
                
            </nav>
        )
    }
}


export default Navigation;
