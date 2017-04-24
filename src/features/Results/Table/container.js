import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSortedRows, getSortColumn, getSortOrder } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
  rows: getSortedRows(state, ownProps),
  sort: {
    column: getSortColumn(state),
    order: getSortOrder(state),
  },
})

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)
