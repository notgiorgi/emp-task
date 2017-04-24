import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

class ResultsTableHeader extends Component {
  render() {
    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Repo Title</Table.HeaderCell>
          <Table.HeaderCell>Owner</Table.HeaderCell>
          <Table.HeaderCell>Stars</Table.HeaderCell>
          <Table.HeaderCell>Created At</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    )
  }
}

export default ResultsTableHeader
