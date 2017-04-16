import { connect } from 'react-redux'

import { selectors } from '../SearchBar'
import { getCurrentPage } from './selectors'

const mapStateToProps = state => ({
  data: selectors.getCurrentQueryData(state),
  currentPage: getCurrentPage(state),
  rowCount: selectors.getRowCount(state),
  isLoading: selectors.getCurrentLoadingState(state),
})

export default connect(mapStateToProps)
