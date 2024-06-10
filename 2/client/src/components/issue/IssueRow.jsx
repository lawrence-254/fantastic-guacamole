import React from 'react'

const IssueRow = () => {
    const style = this.props.rowStyle;
  return (
    <tr>
        <td style={style}>{this.props.issue_id}</td>
        <td style={style}>{this.props.issue_title}</td>

    </tr>
  )
}

export default IssueRow