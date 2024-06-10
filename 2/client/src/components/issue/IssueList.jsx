import React from 'react'
import IssueFilter from './IssueFilter'
import IssueTable from './IssueTable'
import IssueAdd from './IssueAdd'

const IssueList = () => {
  return (
    <div>
        <h1>Issue Tracker</h1>
        <hr/>
        <IssueFilter/>
        <hr/>
        <IssueTable/>
        <hr/>
        <IssueAdd/>
    </div>
  )
}

export default IssueList