import React from 'react'
import ChoresList from './chores/choresList.js'
import DailyTaskList from './tasks/dailyTaskList.js'

import './scheduler.styles.css';

const Scheduler = () => {
  return (
    <div className="container">
      <DailyTaskList />
      <ChoresList />
    </div>
  )
}

export default Scheduler
