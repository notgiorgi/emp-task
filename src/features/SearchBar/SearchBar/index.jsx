import React, { Component } from 'react'
import { Segment, Input } from 'semantic-ui-react'
import debounce from 'lodash/debounce'

import container from './container'
import RowCount from '../RowCount'

class SearchBar extends Component {
  constructor() {
    super()

    this.onChange = this.onChange.bind(this)
    this.search = debounce(this.search.bind(this), 900)
  }

  onChange(e) {
    e.persist()
    this.search(e.target.value)
  }

  search(query) {
    const { exists, fetchQueryData, setQuery } = this.props

    setQuery(query)

    if (!exists(query) && query.length) {
      fetchQueryData(query)
    }
  }

  render() {
    const {
      isLoading,
    } = this.props

    return (
      <Segment>
        <Input
          fluid
          icon="search"
          iconPosition="left"
          size="large"
          placeholder="Type repo name..."
          loading={isLoading}
          labelPosition="right"
          label={<RowCount />}
          onChange={this.onChange}
        />
      </Segment>
    )
  }
}

export default container(SearchBar)
