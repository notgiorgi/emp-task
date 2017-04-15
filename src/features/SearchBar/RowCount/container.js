import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setRowCount } from '../actions'
import { getRowCount } from '../selectors'

export const mapStateToProps = state => ({
  rowCount: getRowCount(state),
})

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setRowCount: (e, data) => setRowCount(data.value),
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)
