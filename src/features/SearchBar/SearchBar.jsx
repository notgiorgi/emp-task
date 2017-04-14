import React, { Component } from 'react'
import { Segment, Input } from 'semantic-ui-react'

import RowCount from './RowCount'

class SearchBar extends Component {
  render() {
    return (
      <Segment>
        <Input
          fluid
          icon="search"
          iconPosition="left"
          size="large"
          placeholder="Type repo name..."
          loading={false}
          labelPosition="right"
          label={<RowCount />}
        />
      </Segment>
    )
  }
}

export default SearchBar
