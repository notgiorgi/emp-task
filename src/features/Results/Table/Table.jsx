import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

import ResultsTableHeader from './TableHeader'
import ResultsTableRow from './TableRow'
import Pagination from '../Pagination'

import container from './container'
import { ORDERINGS } from '../constants'

class ResultsTable extends Component {
  static defaultProps = {
    rows: [],
    sort: {
      column: '',
      order: ORDERINGS.NONE,
    },
  }

  render() {
    const {
      rows,
      sort,
      onSort,
    } = this.props

    return (
      <Table celled sortable>
        <ResultsTableHeader
          sort={sort}
          onClick={onSort}
        />

        <Table.Body>
          {rows.map(ResultsTableRow)}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
              <Pagination />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
  }
}

export default container(ResultsTable)
