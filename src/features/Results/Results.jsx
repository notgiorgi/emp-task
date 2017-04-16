import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

import container from './container'
import ResultsLayout from './ResultsLayout'
import Pagination from './Pagination'
import { Error, NoData, NotFound } from './Messages'

class Results extends Component {
  static defaultProps = {
    data: {
      total_count: -1,
      items: [],
    },
  }

  renderRow = ({ id, name, owner, stargazers_count, created_at }) => (
    <Table.Row key={id}>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{owner.login}</Table.Cell>
      <Table.Cell>{/* eslint-disable */ stargazers_count}</Table.Cell>
      <Table.Cell>{created_at /* eslint-enable */}</Table.Cell>
    </Table.Row>
  )

  renderResults() {
    const {
      data,
      rowCount,
      currentPage,
    } = this.props

    switch (true) {
      case data.error:
        return <Error />
      case (data.total_count === 0):
        return <NotFound />
      case !data.items.length:
        return <NoData />
      default:
        return (
          <Table celled sortable>
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
              {
                data.items
                  .slice(
                    (rowCount * currentPage) - rowCount,
                    rowCount * currentPage,
                  )
                  .map(this.renderRow)
              }
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

  render() {
    const { isLoading } = this.props

    return (
      <ResultsLayout loading={isLoading}>
        {this.renderResults()}
      </ResultsLayout>
    )
  }
}

export default container(Results)
