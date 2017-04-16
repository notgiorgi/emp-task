import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

import container from './container'

class Pagination extends Component {
  static defaultProps = {
    data: {
      items: [],
    },
  }

  onNext = () => {
    const {
      currentPage,
      setCurrentPage,
    } = this.props

    if (currentPage < this.pageCount) {
      setCurrentPage(currentPage + 1)
    }
  }

  onPrev = () => {
    const {
      currentPage,
      setCurrentPage,
    } = this.props

    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  syncPageCount = () => {
    const {
      props: {
        currentPage,
        resetCurrentPage,
      },
      pageCount,
    } = this

    if (currentPage > pageCount) resetCurrentPage()
  }

  get pageCount() {
    const { data, rowCount } = this.props
    return Math.ceil(data.items.length / rowCount)
  }

  render() {
    const {
      data,
      isLoading,
      currentPage,
    } = this.props

    if (isLoading || data.items.length === 0) return null

    this.syncPageCount()

    return (
      <Menu pagination>
        <Menu.Item as="a" icon onClick={this.onPrev}>
          <Icon name="left chevron" /> Prev
        </Menu.Item>

        <Menu.Item>
          Page {currentPage} of {this.pageCount}
        </Menu.Item>

        <Menu.Item as="a" icon onClick={this.onNext}>
          Next <Icon name="right chevron" />
        </Menu.Item>
      </Menu>
    )
  }
}

export default container(Pagination)
