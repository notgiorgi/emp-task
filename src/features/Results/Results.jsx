import React, { Component } from 'react'

import container from './container'
import ResultsLayout from './ResultsLayout'
import { Error, NoData, NotFound } from './Messages'
import { Table } from './Table'

class Results extends Component {
  static defaultProps = {
    data: {
      total_count: -1,
      items: [],
    },
  }

  renderResults() {
    const {
      data,
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
          <Table />
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
