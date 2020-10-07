import React from 'react'
import ChoresList from './chores/choresList.js'
import DailyTaskList from './tasks/dailyTaskList.js'

import './schedule.styles.css';

const Schedule = () => {
  return (
    <div className="container">
      <DailyTaskList />
      <ChoresList />
    </div>
  )
}

export default Schedule
