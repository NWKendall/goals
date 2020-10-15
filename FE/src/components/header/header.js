import React from 'react'
import moment from 'moment';
import './header.styles.css';

const Header = () => {
    let today = moment().format('MMMM Do YYYY')    
    const nameInfo = JSON.parse(localStorage.getItem("user"))
    return (
        <div className="headerStyle">
            <h4>Welcome {nameInfo.first_name} !</h4>
            <h1>Rules, Mantra, Goals!</h1>
            <h4>{today}</h4>
            <h4>Weather</h4>
        </div>
    )
}

export default Header;
