import React, { Component } from 'react'
import { Segment, Table } from 'semantic-ui-react'

import Pagination from './Pagination'

const rows = [
  { id: 123, repoTitle: 'Foobar', owner: 'John Jacuzzi', stars: 999, createdAt: 'Yesterday' },
  { id: 124, repoTitle: 'Foobar.java', owner: 'John Jacuzzi', stars: 945, createdAt: 'Yesterday' },
  { id: 125, repoTitle: 'foobarJS', owner: 'John Jacuzzi', stars: 9199, createdAt: 'Yesterday' },
  { id: 126, repoTitle: 'Netfoobar', owner: 'John Jacuzzi', stars: 99, createdAt: 'Yesterday' },
  { id: 127, repoTitle: 'Hoobar', owner: 'John Jacuzzi', stars: 129, createdAt: 'Yesterday' },
]

class Results extends Component {
  renderRow = ({ id, repoTitle, owner, stars, createdAt }) =>
    <Table.Row key={id}>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>{repoTitle}</Table.Cell>
      <Table.Cell>{owner}</Table.Cell>
      <Table.Cell>{stars}</Table.Cell>
      <Table.Cell>{createdAt}</Table.Cell>
    </Table.Row>

  render() {
    return (
      <Segment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Repo Title</Table.HeaderCell>
              <Table.HeaderCell>Owner</Table.HeaderCell>
              <Table.HeaderCell>Stars</Table.HeaderCell>
              <Table.HeaderCell>Created At</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {rows.map(this.renderRow)}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="5">
                <Pagination />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>
    )
  }
}

export default Results
