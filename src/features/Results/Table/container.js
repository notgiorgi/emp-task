import { connect } from 'react-redux'

import { onSort } from '../actions'
import { getSortedRows, getSortColumn, getSortOrder } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  rows: getSortedRows(state, ownProps),
  sort: {
    column: getSortColumn(state),
    order: getSortOrder(state),
  },
})

const mapDispatchToProps = dispatch => ({
  onSort: column => () => dispatch(onSort(column)),
})

export default connect(mapStateToProps, mapDispatchToProps)
