import React from 'react'
import IssueRow from './IssueRow'

const IssueTable = () => {
    const rowStyle = {border: "1px solid silver", padding: 4};
  return (
    <table style={{borderCollapse: "collapse"}}>
    <thead>
        <tr>
            <th style={rowStyle}>ID</th>
            <th style={rowStyle}>Title</th>
        </tr>
    </thead>
    <tbody>
        <IssueRow rowStyle={rowStyle} issue_id={1}
issue_title="Error in console when clicking Add" />
<IssueRow rowStyle={rowStyle} issue_id={2}
issue_title="Missing bottom border on panel" />
    </tbody>
</table>
  )
}

export default IssueTable