import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

import { ORDERINGS } from '../constants'

const sortOrders = {
  [ORDERINGS.ASC]: 'ascending',
  [ORDERINGS.DESC]: 'descending',
  [ORDERINGS.NONE]: '',
}

class ResultsTableHeader extends Component {
  render() {
    const {
      sort,
      onClick,
    } = this.props

    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={sort.column === 'id' && sortOrders[sort.order]}
            onClick={onClick('id')}
          >
            ID
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={sort.column === 'name' && sortOrders[sort.order]}
            onClick={onClick('name')}
          >
            Repo Title
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={sort.column === 'owner' && sortOrders[sort.order]}
            onClick={onClick('owner')}
          >
            Owner
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={sort.column === 'stargazers_count' && sortOrders[sort.order]}
            onClick={onClick('stargazers_count')}
          >
            Stars
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={sort.column === 'created_at' && sortOrders[sort.order]}
            onClick={onClick('created_at')}
          >
            Created At
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    )
  }
}

export default ResultsTableHeader
