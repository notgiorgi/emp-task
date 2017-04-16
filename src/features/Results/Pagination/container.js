import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectors } from '../../SearchBar'
import { getCurrentPage } from '../selectors'
import { setCurrentPage } from '../actions'

const mapStateToProps = state => ({
  data: selectors.getCurrentQueryData(state),
  currentPage: getCurrentPage(state),
  rowCount: selectors.getRowCount(state),
  isLoading: selectors.getCurrentLoadingState(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setCurrentPage,
    resetCurrentPage: () => setCurrentPage(1),
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)
