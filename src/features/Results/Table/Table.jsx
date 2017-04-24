import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

import ResultsTableHeader from './TableHeader'
import ResultsTableRow from './TableRow'

import Pagination from '../Pagination'


class ResultsTable extends Component {
  static defaultProps = {
    rows: [],
  }

  render() {
    return (
      <Table celled sortable>
        {/*<ResultsTableHeader />*/}

        <Table.Body>
          {/*{this.props.rows.map(ResultsTableRow)}*/}
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

export default ResultsTable
