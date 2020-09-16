import React from 'react'
import './header.styles.css';
const Header = () => {
    let today = String(new Date()).split(" ")

    console.log(today[0])
    let dateString = `${today[0]} ${today[1]} ${today[2]} ${today[3]}`
    return (
        <div className="headerStyle">
            <h1>Rules, Mantra, Goals!</h1>
            <h4>{dateString}</h4>
        </div>
    )
}

export default Header;
