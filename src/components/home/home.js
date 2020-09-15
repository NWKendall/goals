import React, { useContext } from 'react'
import DailyContext from '../../contexts/Daily/DailyContext'

const Home = () => {
    const context = useContext(DailyContext)
    let percent = (context.score / context.daily.length) * 100;

    return (
        <div>
            HOME
            <p>Today's Score! {percent % 2 !== 0 ? percent.toFixed(1) : percent.toFixed(0)}%</p>
        </div>
    )
}

export default Home
