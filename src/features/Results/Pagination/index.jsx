import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

class Pagination extends Component {
  render() {
    return (
      <Menu pagination>
        <Menu.Item as="a" icon>
          <Icon name="left chevron" />
        </Menu.Item>
        <Menu.Item as="a">1</Menu.Item>
        <Menu.Item as="a">2</Menu.Item>
        <Menu.Item as="a">3</Menu.Item>
        <Menu.Item as="a">4</Menu.Item>
        <Menu.Item as="a" icon>
          <Icon name="right chevron" />
        </Menu.Item>
      </Menu>
    )
  }
}

export default Pagination
